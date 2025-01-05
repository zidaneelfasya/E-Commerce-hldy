import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionDemoProps {
    className?: string;
}

const AccordionDemo: React.FC<AccordionDemoProps> = ({ className }) => {
    return (
        <Accordion type="single" collapsible className={`w-full ${className}`}>
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg lg:text-xl">
                  Apakah Ecomerce ini aman?
                </AccordionTrigger>
                <AccordionContent className="text-lg lg:text-xl">
                    Ya. Tentu saja. Kami menggunakan teknologi terbaru dan
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg lg:text-xl">
                    Apakah ini memiliki product yang terjangkau?
                </AccordionTrigger>
                <AccordionContent className="text-lg lg:text-xl">
                    Ya. Kami memiliki berbagai macam produk yang terjangkau
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg lg:text-xl">
                    Apakah saya harus berbelanja di toko fisik?
                </AccordionTrigger>
                <AccordionContent className="text-lg lg:text-xl">
                    Tidak.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionDemo;
