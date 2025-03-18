<script>
    let paragraphs = [
        // {
        //     heading: "Application Introduction",
        //     content: "I’m thrilled to apply for the Database Administrator role at [Company Name] and bring my skills in automation, monitoring, and security from software development to keep your databases running smoothly.",
        //     isOpen: false
        // },
        // {
        //     heading: "Professional Experience",
        //     content: "At Kaytu, I built tools and pipelines to boost performance and security on AWS and other platforms, and at Wolters Kluwer, I kept systems up 99.9% of the time with monitoring and scripts—stuff I can use to manage databases too.",
        //     isOpen: false
        // },
        // {
        //     heading: "Technical Adaptability",
        //     content: "I’ve worked mostly with cloud tech, but I’m excited to dive into databases and pick up MySQL fast, using my AWS and coding know-how to help your team right away.",
        //     isOpen: false
        // },
        // {
        //     heading: "Contact Information",
        //     content: "I’d love to chat about how I can help with your databases—feel free to reach me at [Your Phone Number] or adnan@gulegulzar.in. Thanks for considering me!",
        //     isOpen: false
        // },
        {
            heading: "Background Introduction for Database Administrator Role",
            content:
                "This is in support for the Database Administrator position at REality Software. With a strong background in software development and platform engineering, I bring a proven track record of automation, monitoring, and security expertise that aligns seamlessly with the demands of database administration. This will help me ensure the reliability, performance, and security of your database systems.",
            isOpen: false,
        },
        {
            heading: "Summary of Professional Experience",
            content:
                "In my recent role at Kaytu, I developed automation tools and scalable data pipelines integrating AWS, Azure, and GCP services, optimizing system performance and ensuring secure operations. These skills are directly applicable to automating recurring database tasks and managing robust solutions. At Wolters Kluwer, I implemented monitoring solutions using AWS CloudWatch Synthetics, maintaining 99.9% uptime for critical endpoints, and scripted Python automations to streamline resource management. I can adapt this to monitor database logs, disk space, and backups. My experience with data migrations at Caseware International required an eye for detail, something important as a database administrator.",
            isOpen: false,
        },
        {
            heading: "Technical Adaptability for Database Administrator Role",
            content:
                "While my expertise spans cloud platforms and software development, I am enthusiastic about transitioning into database administration and am committed to rapidly mastering MySQL tools and techniques. My certifications in AWS, Terraform, and Kubernetes, combined with a proactive problem-solving mindset, position me to contribute immediately to your team’s success in maintaining high-performing, secure database environments.",
            isOpen: false,
        },
        
        // {
        //     heading: "Background for Database Administrator Role",
        //     content:
        //         "I’m applying for the Database Administrator position at REality Software, bringing a robust background in software development and platform engineering. My expertise includes automation, monitoring, and security from roles at Kaytu, Wolters Kluwer, and Caseware International, where I built scalable data pipelines (AWS, Azure, GCP), implemented AWS CloudWatch Synthetics for 99.9% uptime, and managed data migrations with precision. Though transitioning to database administration, I’m eager to master MySQL, leveraging my AWS, Terraform, and Kubernetes certifications to ensure reliable, high-performing, and secure database systems.",
        //     isOpen: false,
        // },
        {
            heading: "Contact Information",
            content:
                "I would welcome the opportunity to discuss how my skills in automation, performance optimization, and secure system design can support REality Software's needs. Thank you for considering my application. I am available immediately and look forward to the possibility of contributing to your organization.",
            isOpen: false,
        },
    ];

    // Function to toggle section visibility
    export async function toggleSection(index) {
        paragraphs[index].isOpen = !paragraphs[index].isOpen;
    }

    import { slide } from "svelte/transition";
</script>

<main class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-7xl font-bold text-gray-900 mb-40">REality Software</h1>

        <div class="space-y-10">
            {#each paragraphs as paragraph, index}
                <div class="bg-white rounded-lg shadow-sm">
                    <!-- Heading with click handler -->
                    <button
                        on:click={() => toggleSection(index)}
                        class="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    >
                        <h2 class="text-2xl text-gray-900 font-semibold">
                            {paragraph.heading}
                        </h2>
                        <span class="text-gray-700">
                            {#if paragraph.isOpen}
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 15l7-7 7 7"
                                    />
                                </svg>
                            {:else}
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            {/if}
                        </span>
                    </button>

                    <!-- Collapsible content -->
                    {#if paragraph.isOpen}
                        <div
                            class="overflow-hidden"
                            transition:slide={{ duration: 850 }}
                        >
                            <div class="p-4 pt-0">
                                <p class="text-xl text-gray-700">
                                    {paragraph.content}
                                </p>
                            </div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</main>
