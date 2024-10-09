---
created: 2024-10-08T23:58:59.342Z
---
---
created: 2024-10-08T23:57:42.354Z
---
---
title: For-profit AI safety
date: 2024-04-22
categories:
  - ai safety
  - startups
---

AI development attracts more than $67 billion in yearly investments, contrasting sharply with the $250 million allocated to AI safety. This gap suggests there's a large opportunity for AI safety to tap into the commercial market. The big question then is, how do you close that gap?

In this post, we aim to outline the for-profit AI safety opportunities within four key domains:

1. Guaranteeing the **public benefit and reliability** of AI when deployed.
2. Enhancing the **interpretability and monitoring** of AI systems.
3. Improving the **alignment** of user intent at the model level.
4. Developing **protections** against future AI risk scenarios _using_ AI.

At Apart, we're genuinely excited about what for-profit AI security might achieve. Our experience working alongside EntrepreneurFirst on [AI security](https://twitter.com/EsbenKC/status/1678809555055136769) [entrepreneurship hackathons](https://lu.ma/ua7pzcop), combined with discussions with founders, advisors, and former venture capitalists, highlights the promise of the field. With that said, let's dive into the details.

## Safety in deployment

_Problems related to ensuring that deployed AI is reliable, protected against misuse, and safe for users, companies, and nation states. Related fields include dangerous capability evaluation, control, and cybersecurity._

Deployment safety is crucial to ensure AI systems function safely and effectively without misuse. Security also meshes well with commercial opportunities and building capability in this domain can scale strong security teams to solve future safety challenges. If you are interested in non-commercial research, we also suggest looking into governmental research bodies, such as the ones in [UK](https://www.gov.uk/government/publications/ai-safety-institute-overview/introducing-the-ai-safety-institute), [EU](https://www.euractiv.com/section/artificial-intelligence/news/eu-commission-readies-establishment-of-ai-office/), and [US](https://www.nist.gov/artificial-intelligence/artificial-intelligence-safety-institute).

### Concrete problems for AI deployment

- **Enhancing AI application reliability and security:** Foundation model applications, from [user-facing chatbots](https://platform.openai.com/docs/models/overview) [utilizing software tools for sub-tasks](https://github.com/gpt-engineer-org/gpt-engineer) to [complex multi-agent systems](https://alignmentjam.com/jam/multiagent), require robust security, such as protection against prompt injection, insecure plugins, and data poisoning. For detailed security considerations, refer to the [Open Web Application Security Project's top 10 LLM application security considerations](https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-2023-slides-v1_1.pdf).
- **Mitigating unwanted model output:** With [increasing](https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20231219-the-eu-reaches-a-political-agreement-on-the-ai-act) [regulations](https://www.dwt.com/blogs/artificial-intelligence-law-advisor/2023/07/china-issues-generative-ai-regulations#:~:text=AI%20Measures%20include%3A-,Content%20Moderation,-%3A%20According%20to) on algorithms, preventing illegal outputs may become paramount, potentially requiring stricter constraints than model alignment.
- **Preventing malicious use:**
- **For AI API providers:** Focus on monitoring for malicious or illegal API use, safeguarding models from competitor access, and implementing zero-trust solutions.
- **For regulators:** Scalable legislative auditing, like [model card](https://arxiv.org/abs/1810.03993) [databases](https://alignmentjam.com/project/model-cards-for-ai-algorithm-governance), open-source model monitoring, and technical governance solutions will be pivotal in 2024 and 2025. Compliance with new legislation, akin to GDPR, will likely necessitate [extensive auditing and monitoring services](https://www.europarl.europa.eu/news/en/headlines/society/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence#::text=High%2Dimpact%20general%2Dpurpose%20AI%20models%20that%20might%20pose%20systemic%20risk%2C%20such%20as%20the%20more%20advanced%20AI%20model%20GPT%2D4%2C%20would%20have%20to%20undergo%20thorough%20evaluations%20and%20any%20serious%20incidents%20would%20have%20to%20be%20reported%20to%20the%20European%20Commission.).
- **For deployers:** Ensuring data protection, access control, and reliability will make AI more useful, private, and secure for users.
- **For nation-states:** Assurances against nation-state misuse of models, possibly through zero-trust structures and treaty-bound compute usage monitoring.

### Examples

- [Apollo Research](https://www.apolloresearch.ai/): _“We intend to develop a holistic and far-ranging model evaluation suite that includes behavioral tests, fine-tuning, and interpretability approaches to detect deception and potentially other misaligned behavior.”_
- [Lakera.ai](http://lakera.ai/): _“Lakera Guard empowers organizations to build GenAI applications without worrying about prompt injections, data loss, harmful content, and other LLM risks. Powered by the world's most advanced AI threat intelligence.”_
- [Straumli.ai](http://straumli.ai/): _“Ship safe AI faster through managed auditing. Our comprehensive testing suite allows teams at all scales to focus on the upsides.”_

## Interpretability and oversight

_Problems related to monitoring for incidents, retracing AI reasoning, and understanding of AI capability. Related to the research in interpretability, scalable oversight, and model evaluation._

It is without a doubt that more oversight and understanding of AI models will help us make the technology more secure ([despite criticism](https://www.lesswrong.com/posts/LNA8mubrByG7SFacm/against-almost-every-theory-of-impact-of-interpretability-1)). Given the computation needs of [modern interpretability methods](https://transformer-circuits.pub/2023/monosemantic-features/index.html) along with [AI transparency compliance](https://www.euaiact.com/key-issue/5#:~:text=Article%2013%20of%20the%20EU%20AI%20Act%20provides%20the%20requirement,providers%20and%20users%20to%20reasonably), interpretability and oversight appears to be well-aligned with commercial interests.

### Problems in AI transparency and monitoring

- **Tracing AI decision-making:** In high-security domains like medical imaging or AI-assisted planning, understanding a model's decision-making process is essential for trust. Current methods involve [retrieval](https://arxiv.org/abs/2312.10997) and [factored cognition](https://arxiv.org/abs/2312.10997), which can be improved and integrated further. The ability to retrace the reasoning behind problematic outputs will also be important in preventing [repeated incidents](https://incidentdatabase.ai/).
- **Better AI scrutiny:** Creating better explainability tools will make AI model outputs easier to scrutinize for expert and non-expert users.
- **Scalable incident monitoring:** Effective monitoring of unintended model behaviors is crucial for product usability, [incident reporting](https://incidentdatabase.ai/), auditing, reinforcement learning from human feedback, and usage statistics. Clients like OpenAI, with extensive API usage data, require innovative scalable oversight methods for effective analysis.
- **Expanding model-scale interpretability:** Current full-model interpretability methods demand [significant](https://openai.com/research/language-models-can-explain-neurons-in-language-models) [computational](https://transformer-circuits.pub/2023/monosemantic-features/index.html) [resources](https://arxiv.org/abs/2310.01870). As a result, making model-scale interpretability work will likely require commercial infrastructure.

### Examples

- [DeepDecipher](https://deepdecipher.org/): _“A web page and API that provides interpretability information from many sources on various transformer models.”_
- [Fiddler](https://www.fiddler.ai/): _“AI Observability: Build trust into AI with explainable AI.”_
- [Prometheus](https://prometheus.io/): _“Power your metrics and alerting with the leading open-source monitoring solution.”_

## Alignment

_Problems related to user intent alignment, misalignment risks of agentic systems, and user manipulation. Related fields include red teaming, causal incentives, and activation steering._

Alignment is an important part of ensuring both [model reliability](https://openai.com/blog/our-approach-to-alignment-research) along with further security against [deceptive](https://www.apolloresearch.ai/blog/understanding-strategic-deception-and-deceptive-alignment) and [rogue](https://yoshuabengio.org/2023/05/22/how-rogue-ais-may-arise/) AI systems. This objective aligns closely with commercial interests, specifically the need to improve model alignment, minimize unnecessary hallucinations, and strengthen overall reliability.

### Approaches to commercial alignment

- **Safe-by-design architectures:** Innovate new architectural designs that are inherently safe, such as less agentic or [more interpretable models](https://transformer-circuits.pub/2022/solu/index.html).
- **Alignment-focused training datasets:** As frontier models are often trained on diverse internet data ([including illicit content](https://cyber.fsi.stanford.edu/news/investigation-finds-ai-image-generation-models-trained-child-abuse)) and [require significant investment](https://en.wikipedia.org/wiki/GPT-4#:~:text=Sam%20Altman%20stated%20that%20the,was%20more%20than%20%24100%20million.)), there are strong [commercial interests](https://openai.com/blog/data-partnerships) to provide guarantees for aligned outcomes. This includes developing data harmfulness classification methods, RLHF, and improving human value alignment on fine-tuning datasets.
- **Robust alignment methodology:** Refine methods like reinforcement learning from human or AI feedback, fine-tuning, and transfer learning. Current techniques are unstable and can lead to security risks, such as [jailbreaks](https://arxiv.org/abs/2311.03348) and [model deception](https://arxiv.org/abs/2401.05566).
- **Model blue-teaming:** Develop products and solutions for improving model alignment with user intent, functionality, and tool usage in major models. Blue-teaming involves mitigating the risks implied by red-teaming efforts.
- **Model red-teaming:** Offer scalable or consultancy-based red teaming services to help companies identify and correct errors before they reach clients.

### Examples

- [IBM AI Fairness 360](https://aif360.res.ibm.com/): _“This extensible open source toolkit can help you examine, report, and mitigate discrimination and bias in machine learning models throughout the AI application lifecycle.”_
- [Google Deepmind](https://deepmind.com/) ([a](https://web.archive.org/web/20230216145102/https://www.deepmind.com/)): _“Solving intelligence to advance science and benefit humanity.”_

## AI Defense

_Problems related to systemic risks of AI, improved cyber offense capabilities, and difficulty of auditing. Related fields include cybersecurity, infrastructure development, and multi-agent security._

AI defense is critical to safeguard infrastructure and governments against [the](https://www.sciencedirect.com/science/article/pii/S0378426621002466) [risks](https://www.ncsc.gov.uk/report/impact-of-ai-on-cyber-threat) posed by artificial general intelligence and other AI applications. Given the magnitude of this challenge, supporting solutions on a comparable scale aligns well with commercial structures.

### Concrete societal-scale needs for AI defense

- **AI-driven cyber defense:** With the advent of general intelligence, cyber offenses are expected to accelerate. Creating scalable defenses for the broader attack surface of AI systems, along with enhancing traditional cyber defenses, is vital for protecting infrastructure and ensuring national security.
- **Scalable AI and infrastructure vulnerability detection:** Using AI to [scan for](https://www.vrt.be/vrtnws/en/2023/02/15/ethical-hackers-can-now-legally-hack-belgian-companies/#:~:text=A%20new%20Belgian%20law%20will,could%20land%20you%20in%20jail.&text=Ethical%20hackers%20test%20the%20security,in%20order%20to%20reveal%20vulnerabilities.)) [vulnerabilities](https://www.hackiceland.is/#about) across services and apps can lead to robust, proactive cybersecurity measures for a safer internet.
- **Auditing firmware & hardware:** Compliance with computing and training governance is likely to [become mandatory](https://ec.europa.eu/commission/presscorner/detail/en/qanda_21_1683#:~:text=Why%20is%2010%5E25%20FLOPs%20an%20appropriate%20threshold%20for%20GPAI%20with%20systemic%20risks%3F). [Developing](https://arxiv.org/abs/2303.11341) [methods](https://arxiv.org/abs/2307.00682) for adherence to these constraints is a critical task.
- **Systemic security:** Similar to isolated communication networks in critical infrastructures like national energy control, robust measures against AI network-based cyber offenses are essential. This presents a significant opportunity for companies specializing in industrial engineering and systems security.
- **Combatting misinformation:** Democratic processes are at-risk to deepfakes, misinformation, and malicious intervention, and AI will exacerbate these issues.

### Examples

- [Darktrace](https://darktrace.com/): _“Prevent targeted attacks with the only AI in cybersecurity that adapts to your unique business”_
- [CrowdStrike](https://www.crowdstrike.com/en-us/): _“The world's leading AI-native cybersecurity platform.”_
- [Siemens:](https://www.siemens.com/global/en/products/energy/energy-automation-and-smart-grid/grid-security.html) _“Cybersecurity is a highly sensitive area that demands a trustworthy partner. A technology partner who understands how products, systems, and solutions integrate with the processes and people behind them and how people interact with them.”_

## Wrapping up

We are optimistic about the potential of AI safety in commercial domains and hope that this can serve as an inspiration for future projects. We do not expect this overview to be exhaustive, and warmly invite you to share your thoughts in the comments. Please reach out [via email](mailto:esben@apartresearch.com) if you're interested in developing AI safety solutions or considering investments in these types of projects.

_Apart is an AI safety research organization that incubates research teams through AI safety research_ [_hackathons_](https://apartresearch.com/sprints/overview) _and_ [_fellowships_](https://apartresearch.com/lab)_. You can stay up-to-date with our work via_ [_our updates_](https://apartresearch.com/#subscribe)_._

### Appendix: Risks of commercial AI safety

Here are a few risks to be aware of when launching commercial AI safety initiatives:

- **Maintaining control:** Taking on investment late is a good idea to keep [owner dilution](https://www.ycombinator.com/blog/dilution) to a minimum and retain control of the company, especially to avoid commercial incentives taking over. You also need to ensure that your bylaws and investor agreements are heavily skewed in your favor (I recommend the short book called [Fundraising](https://www.amazon.com/Fundraising-Ryan-Breslow/dp/B09CR7TFDT)). Always remember that investors invest for profit.
- **Incentive alignment:** It's important that your financial incentives are aligned with the AI safety purposes, otherwise the core research and development will likely skew in a less impactful direction.
- **Scaling too fast:** The culture of high growth can easily divert your original purpose. Be careful of scaling before 1) you have reached product-market fit (e.g. [$1M ARR](https://openviewpartners.com/blog/1m-arr-achieved-product-market-fit-think-again/)) and 2) you have solved the incentive alignment. You need to build your system for growth before growing. I recommend reading [Disciplined Entrepreneurship](https://www.amazon.com/Disciplined-Entrepreneurship-Steps-Successful-Startup/dp/1118692284) or [The Great CEO Within](https://www.amazon.com/Great-CEO-Within-Tactical-Building-ebook/dp/B07ZLGQZYC) for more context on these questions.

### Appendix: Further examples

- [Anthropic](https://llmglobalvalues.anthropic.com/): _“Whose opinions are the responses of Large Language Models (LLMs) most similar with when considering the perspectives of participants across the world?”_
- [Imbue](https://imbue.com/) ([a](https://web.archive.org/web/20230117195654/https://generallyintelligent.com/)): _“We want machines that learn the way humans do”_
- [Grafana](https://grafana.com/products/enterprise/): _“Compose and scale observability with one or all pieces of the stack”_
- [Ought:](https://ought.org/research/factored-cognition) _“Ought is a product-driven research lab that develops mechanisms for delegating high-quality reasoning to advanced machine learning systems.”_
- [Rebuff.ai](https://rebuff.ai/): _“A self-hardening prompt injection detector”_
- [METR](https://metr.org/): _“METR works on assessing whether cutting-edge AI systems could pose catastrophic risks to civilization.”_