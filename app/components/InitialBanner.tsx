"use client";
import Image from "next/image";
import {motion } from 'framer-motion';

const leafVariants = {
    animate: {
      rotate: [0, 5, 0],
    //   translateX: [-5,0 ,5, -5],
      transition: {
        repeat: Infinity,
        ease: "easeInOut",
        duration: 14,
      }
    }
  }

const rightLeafVariants = {
    animate: {
      rotate: [0, 5, 0],
      transition: {
        repeat: Infinity,
        ease: "easeInOut",
        duration: 10,
      }
    }
  }
  
export default function InitialBanner() {
    return (
        <div className="group-image relative overflow-hidden">
            <Image
                className="dark:invert"
                src="/sample-beach.jpg"
                alt="sample beach"
                width={1000}
                height={1000}
                priority
            />
            <motion.div
                className="absolute top-[-10vw] left-[-10vw] origin-top-left"
                variants={leafVariants}
                animate="animate"
            >
            <Image
                className="dark:invert  w-[30vw]"
                src="/coconut-leaf-left.png"
                alt="sample beach"
                width={1000}
                height={1000}
                priority
            />
            </motion.div>

            <motion.div 
            variants={rightLeafVariants}
            animate="animate"
            className="absolute top-[-10vw] right-[-10vw] origin-top-right">
                <Image
                    className="dark:invert  w-[30vw]"
                    src="/coconut-leaf-right.png"
                    alt="sample beach"
                    width={1000}
                    height={1000}
                    priority
                />
            </motion.div>
        </div>
    )
}