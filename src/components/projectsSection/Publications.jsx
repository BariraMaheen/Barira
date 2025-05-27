import { motion } from "framer-motion";

export const Publications = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between mt-[100px] max-w-6xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        variants={{
          hidden: { opacity: 0, x: -50, scale: 0.8 },
          visible: { opacity: 1, x: 0, scale: 1 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://d1qwl4ymp6qhug.cloudfront.net/Release/R10141/images/landings/magazine/first-screen/tablet-mobile.png"
          alt="Data research illustration"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </motion.div>

      
      <motion.div
        className="md:w-1/2 text-left"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-6xl text-cyan mb-6">Publications</h2>
        <h3 className="text-2xl font-semibold text-orange mb-2">
          Skills based task assignment Dataset{" "}
          <span className="text-gray-500 text-sm">Nov 5, 2024</span>
        </h3>
        <p className="text-lg leading-relaxed mb-4">
          Collaborated on a Kaggle dataset titled{" "}
          <em>"Skill-Based Task Assignment"</em>, focusing on mapping project
          task descriptions with relevant skills. This dataset aims to support
          research and applications in intelligent task assignment and resource
          planning. I contributed to data collection, organization, and
          structuring to ensure it’s usable for machine learning models and
          project planning tools.
        </p>
        <a
          href="https://www.kaggle.com/datasets/umerfarooq09/skill-based-task-assignment/data"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan underline font-semibold hover:text-blue-600"
        >
          View Dataset on Kaggle
        </a>
      </motion.div>
    </motion.div>
  );
};
