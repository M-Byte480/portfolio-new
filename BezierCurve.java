import java.text.DecimalFormat;
import java.util.Arrays;
import java.util.Scanner;

public class BezierCurve {
    public static void main(String[] args) {
        System.out.println(1.0/10);
        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter the number of control points (3 or more): ");

        int n = 3;
        if (n < 3) {
            System.out.println("You must enter at least 3 control points.");
            return;
        }

        double[] x = {0, 3, 6};
        double[] y = {0, 3, 9};

        System.out.print("Enter the number of points to calculate on the curve (default 11: increments of 0.1): ");

        String input = scanner.nextLine().trim();
        int steps;
        int defaultSteps = 11;

        if (input.isEmpty()) {
            steps = defaultSteps;
        } else {
            try {
                steps = Integer.parseInt(input);
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Using default value: " + defaultSteps);
                steps = defaultSteps;
            }
        }

        double[] curveX = new double[steps];
        double[] curveY = new double[steps];

        // t, p0...pn, X(t), Y(t)
        String template = "%5s | %s  %5s | %5s\n";

        StringBuilder pointsHeader = new StringBuilder();
        for (int i = 0; i < n; i++) {
            pointsHeader.append(String.format(" %5s |", "P" + i));
        }


        // Header for the output table

        System.out.printf(template, "t", pointsHeader.toString(), "X(t)", "Y(t)");

        System.out.println("-".repeat(String.format(template, "t", pointsHeader.toString(), "X(t)", "Y(t)").length() - 1));

        DecimalFormat df = new DecimalFormat("#.##");
        for (int i = 0; i < steps; i++) {
            double t = (double) i / (steps - 1);
            double[] binomialCoefficient = new double[n];
            pointsHeader.setLength(0);
            for (int j = 0; j < n; j++) {
                binomialCoefficient[j] = binomialCoeff(n - 1, j) * Math.pow(t, j) * Math.pow(1 - t, n - 1 - j);
                pointsHeader.append(String.format(" %5.2f |", binomialCoefficient[j]));
            }
            curveX[i] = 0;
            curveY[i] = 0;
            for (int j = 0; j < n; j++) {
                curveX[i] += binomialCoefficient[j] * x[j];
                curveY[i] += binomialCoefficient[j] * y[j];
            }
            System.out.printf(template, df.format(t), pointsHeader, String.format("%5.2f", curveX[i]), String.format("%5.2f", curveY[i]));

        }
        scanner.close();
    }

    // Snatched it from GeeksForGeeks
    // Returns value of Binomial Coefficient C(n, k)
    static int getnCk(int n, int k, int[][] memo) {

        // k cannot be greater than n so we return 0 here
        if (k > n)
            return 0;

        // base condition when k and n are equal or k = 0
        if (k == 0 || k == n)
            return 1;

        // Check if pair n and k is already
        // calculated then return it from here
        if (memo[n][k] != -1) return memo[n][k];

        // Recursive add the value and store to memo table
        return memo[n][k] = getnCk(n - 1, k - 1, memo)
                + getnCk(n - 1, k, memo);
    }

    static int binomialCoeff(int n, int k) {

        // Create table for memoization
        int[][] memo = new int[n + 1][k + 1];
        for (int[] row : memo)
            Arrays.fill(row, -1);

        return getnCk(n, k, memo);
    }
}
