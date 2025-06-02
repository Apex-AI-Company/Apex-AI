export interface ModalOption {
	id: string;
	text: string;
	nextScreenId?: string;
	whatsappMessageTemplate?: string;
	action: "openWhatsApp" | "nextScreen";
}

export interface ModalScreen {
	id: string;
	heading: string;
	subHeading?: string;
	question?: string;
	contentType: "options" | "textInput" | "info";
	options?: ModalOption[];
	infoContent?: string;

	inputLabel?: string;
	inputPlaceholder?: string;
	finalActionText?: string;
	action?: "openWhatsApp";
	whatsappMessageTemplate?: string;
}

export const WHATSAPP_PHONE_NUMBER = "919834978407";

export const modalFlow: ModalScreen[] = [
	{
		id: "s1",
		heading: "Welcome to APEX AI Solutions!",
		subHeading: "Driven by Curiosity, Powered by Innovation",
		question: "How can we assist you today?",
		contentType: "options",
		options: [
			{ id: "s1_opt1", text: "I want to explore your AI solutions & services.", nextScreenId: "s2_path1", action: "nextScreen" },
			{ id: "s1_opt2", text: "I have a specific project or problem to solve.", nextScreenId: "s2_path2", action: "nextScreen" },
			{ id: "s1_opt3", text: "I'm interested in your technology stack.", nextScreenId: "s2_path3", action: "nextScreen" },
			{ id: "s1_opt4", text: "I'd like to get in touch / discuss hiring you.", nextScreenId: "s2_path4_direct", action: "nextScreen" },
		],
	},

	{
		id: "s2_path1",
		heading: "Discover What We Can Build For You",
		question: "Which area are you most interested in?",
		contentType: "options",
		options: [
			{
				id: "s2_p1_opt1",
				text: "Web Platforms with Integrated ML",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'm interested in exploring your Web Platforms with Integrated ML.",
			},
			{
				id: "s2_p1_opt2",
				text: "Computer Vision Systems",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'm interested in exploring your Computer Vision Systems.",
			},
			{
				id: "s2_p1_opt3",
				text: "Automation & Data Engineering (ETL, Web Scraping)",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'm interested in exploring your Automation & Data Engineering solutions.",
			},
			{
				id: "s2_p1_opt4",
				text: "AI Agents & Chatbots",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'm interested in exploring your AI Agents & Chatbots.",
			},
			{
				id: "s2_p1_opt5",
				text: "IoT Intelligent Systems",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'm interested in exploring your IoT Intelligent Systems.",
			},
			{
				id: "s2_p1_opt6",
				text: "MLOps & Deployment Pipelines",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'm interested in exploring your MLOps & Deployment Pipelines.",
			},
			{
				id: "s2_p1_opt7",
				text: "Custom AI Solutions (General)",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'm interested in exploring your Custom AI Solutions.",
			},
			{ id: "s2_p1_opt_back", text: "« Go Back", nextScreenId: "s1", action: "nextScreen" },
		],
	},

	{
		id: "s2_path2",
		heading: "Let's Build Something Impactful!",
		question: "What kind of challenge are you looking to address?",
		contentType: "options",
		options: [
			{ id: "s2_p2_opt1", text: "Automate Business Processes", nextScreenId: "s2_path2_describe", action: "nextScreen" },
			{ id: "s2_p2_opt2", text: "Unlock Insights from Data", nextScreenId: "s2_path2_describe", action: "nextScreen" },
			{ id: "s2_p2_opt3", text: "Develop a Custom AI Application", nextScreenId: "s2_path2_describe", action: "nextScreen" },
			{ id: "s2_p2_opt4", text: "Improve Existing AI/ML Systems", nextScreenId: "s2_path2_describe", action: "nextScreen" },
			{ id: "s2_p2_opt5", text: "Other Challenge", nextScreenId: "s2_path2_describe", action: "nextScreen" },
			{ id: "s2_p2_opt_back", text: "« Go Back", nextScreenId: "s1", action: "nextScreen" },
		],
	},

	{
		id: "s2_path2_describe",
		heading: "Tell Us More",
		contentType: "textInput",
		inputLabel: "Briefly describe your project or challenge (you can elaborate more on WhatsApp):",
		inputPlaceholder: "E.g., We need an AI to analyze customer feedback...",
		finalActionText: "Request a Consultation via WhatsApp",
		action: "openWhatsApp",

		whatsappMessageTemplate: "Hi, I'd like to request a consultation regarding [CHALLENGE_TYPE]. Project details: [USER_INPUT]",
	},

	{
		id: "s2_path3",
		heading: "Our Technology Powerhouse",
		contentType: "info",
		infoContent: `
      <p class="mb-2">We work with a wide range of technologies including (but not limited to):</p>
      <ul class="list-disc list-inside text-sm space-y-1">
        <li><strong>Full-Stack:</strong> React, Node.js, Next.JS, Python (Flask, FastAPI), Streamlit</li>
        <li><strong>AI/ML Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV</li>
        <li><strong>NLP & Vision:</strong> Transformers (Hugging Face), spaCy, NLTK, CNNs, YOLO</li>
        <li><strong>MLOps/DevOps:</strong> Docker, Kubernetes, GitHub Actions, MLflow, Jenkins, AWS, GCP, Azure</li>
        <li><strong>Data Engineering:</strong> Apache Spark, Kafka, Airflow, ETL pipelines, Web Scraping tools (Selenium, Scrapy, BeautifulSoup)</li>
      </ul>
    `,
		question: "Would you like to discuss specific technical requirements or capabilities?",
		options: [
			{
				id: "s2_p3_opt1",
				text: "Yes, Talk to a Tech Expert via WhatsApp",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi, I'd like to discuss specific technical requirements regarding your tech stack.",
			},
			{ id: "s2_p3_opt2", text: "« Go Back", nextScreenId: "s1", action: "nextScreen" },
		],
	},

	{
		id: "s2_path4_direct",
		heading: "Ready to Connect?",
		question: "We're excited to hear from you! The best way to discuss your needs or hiring is directly with Rohit Kshirsagar (Lead Operations).",
		contentType: "options",
		options: [
			{
				id: "s2_p4_opt_wa",
				text: "Chat with Rohit on WhatsApp",
				action: "openWhatsApp",
				whatsappMessageTemplate: "Hi Rohit, I'd like to connect and discuss working with APEX AI.",
			},
			{ id: "s2_p4_opt_back", text: "« Go Back", nextScreenId: "s1", action: "nextScreen" },
		],
	},
];
