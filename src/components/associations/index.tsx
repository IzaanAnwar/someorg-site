'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Associations() {
  return (
    <div className="max-w-7xl mx-auto my-24">
      <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 mt-12">
        Our <strong className="text-primary">Associations</strong>
      </h1>
      <p className="text-gray-600 mb-12 max-w-5xl mx-auto text-center">
        We take pride in our strategic partnerships with industry leaders and innovators. Together,
        we ensure that our solutions remain at the forefront of technology, delivering security,
        reliability, and excellence. Our collaborations drive progress and empower us to offer you
        cutting-edge protection and services.
      </p>
      <div className="flex justify-center items-center gap-12 mt-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Image
            src="https://websec.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebsec%20client%20-%20erasmus%20university%20rotterdam.b5c43ab2.png&w=256&q=75"
            alt="Logo 1"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Image
            src="https://websec.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebsec%20client%20-%20worldline.9fe6d677.png&w=256&q=75"
            alt="Logo 1"
            width={100}
            height={100}
            className="animate-fade animate-duration-700"
          />
        </motion.div>
        <Image
          src="https://websec.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebsec%20client%20-%20robobank.2dc7499a.png&w=256&q=75"
          alt="Logo 2"
          width={100}
          height={100}
          className="animate-fade animate-duration-900"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Image
            src="https://websec.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebsec%20client%20-%20worldline.9fe6d677.png&w=256&q=75"
            alt="Logo 1"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          <Image
            src="https://websec.nl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwebsec%20client%20-%20binkadvies.2f6f0bab.png&w=256&q=75"
            alt="Logo 1"
            width={100}
            height={100}
          />
        </motion.div>
      </div>
    </div>
  );
}
