import { ShoppingCart } from "lucide-react";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export const CartHeader = () => {
  const { total } = useCart();
  const showPremium = total >= 200;

  return (
    <SheetHeader className="space-y-4 pb-4 border-b border-gold/20">
      <SheetTitle className="text-2xl font-bold flex items-center gap-2">
        <span className="text-gradient bg-gradient-gold flex items-center gap-2">
          <ShoppingCart className="h-6 w-6" /> Seu Carrinho
        </span>
        <AnimatePresence>
          {showPremium && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-gradient bg-gradient-gold ml-6 text-xl font-semibold tracking-[0.15em] italic relative"
              style={{
                textShadow: "0 0 15px rgba(255, 184, 0, 0.4)",
                background: "linear-gradient(135deg, #FFB800 0%, #FFD700 50%, #FFB800 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "shimmer 2s linear infinite",
              }}
            >
              Premium
            </motion.span>
          )}
        </AnimatePresence>
      </SheetTitle>
    </SheetHeader>
  );
};