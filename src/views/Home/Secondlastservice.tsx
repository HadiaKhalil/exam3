"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AdvantagesSection() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-orange-500 mb-6"
      >
        Nossos <span className="text-gray-900">Diferenciais</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-gray-400 text-center mb-10"
      >
        {`Com mais de 15 anos de experiência no setor de e-commerce, desenvolvemos soluções eficientes para reduzir custos
        e maximizar resultados, sem exigir investimentos financeiros adicionais.`}
      </motion.p>

      {/* Features Section */}
      <div className="space-y-6">
        {/* Feature 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative w-1/3 h-40">
            <Image 
              src="/images/11.avif" 
              alt="Feature 1" 
              layout="fill"        
             
              objectFit="cover" 
              priority
            />
          </div>
          <div className="p-6 text-white">
            <h3 className="text-xl font-semibold text-orange-500">Tecnologia Avançada</h3>
            <p className="text-gray-400 mt-2">
              {`Sistemas 100% integrados com IA para gestão eficiente, reduzindo erros e otimizando processos.`}
            </p>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center bg-orange-500 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="p-6 text-gray-900">
            <h3 className="text-xl font-semibold">Suporte Exclusivo</h3>
            <p className="text-gray-800 mt-2">
              {`Nossa equipe está sempre disponível para ajudar você a alcançar seus objetivos no e-commerce.`}
            </p>
          </div>
          <div className="relative w-1/3 h-40">
            <Image 
              src="/images/image.webp" 
              alt="Feature 2" 
              layout="fill" 
              objectFit="cover" 
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
