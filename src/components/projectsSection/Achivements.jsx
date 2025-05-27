import { motion } from "framer-motion";

export const Achievements = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between mt-[100px] max-w-6xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      
      <motion.div
        className="md:w-1/2 text-left"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-6xl text-cyan mb-10">Achievements</h2>
        <ul className="text-lg space-y-4">
          <li>💻 Prime Minister Youth Laptop Scheme 2023</li>
          <li>🎓 Cheif Minister Honhar Scholarship 2025</li>
          <li>🎉 Served as Vice President for CodeQuest Competition held at University of Mianwali (2024)</li>
          <li>🎯 Participated in Hackathon Code’x24 at Namal University, Mianwali</li>
          <li>📚 Completed Front-End Web Design course from Coursera (May 2024)</li>
          <li>✅ Completed Spring Framework certification from Simplilearn (June 2024)</li>
        </ul>
      </motion.div>

      
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://st.depositphotos.com/1026266/52079/i/450/depositphotos_520798026-stock-photo-group-of-business-people-working.jpg"
          alt="Achievement Illustration"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};
