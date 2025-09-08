public class BresenhamsCircleDrawing {
    private static final int X = 1;
    private static final int Y = 2;
    private static final int RADIUS = 10;

    public static void main(String[] args) {
        // Get Kmax
        int kMax = RADIUS - 1;
        int k = 0;

        // Print the table header
        System.out.printf("Circle with midpoint at (%d, %d) and radius %d%n", X, Y, RADIUS);
        String template = "%5s |%5s |%5s |%5s |%5s |%5s%n";
        System.out.printf(template, "k", "X", "Y", "Pk", "Yk+1", "mod");
        System.out.println("-".repeat(String.format(template, "k", "X", "Y", "Pk", "Yk+1", "mod").length() - 1));

        // Initial values
        int y = Y + RADIUS;
        double p = 5.0 / 4 - RADIUS;
        int mod = 0;
        int x = X + k;
        int ykPlus1 = -1; // Not initialized yet

        while (k < kMax){
            // The Mod assignment and dropping of the yk+1 value is done here
            if (p < 0) {
                mod = 0;
                ykPlus1 = y;
            }else{
                ykPlus1 = y - 1;
                mod = 2*(ykPlus1);
            }

            // Calculate next Pk+1
            double pKPlus1 = p + 2*(x+1) + 1 - mod;

            // Print the current values
            System.out.printf(template, k, x, y, p, ykPlus1, mod);

            // Update values for next iteration
            k += 1;
            x = X + k;
            p = pKPlus1;
            y = ykPlus1;
        }
    }
}
