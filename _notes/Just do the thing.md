---
title: '"Just do the thing"'
slug: do
date: 2024-10-19
categories:
  - slice of life
---
When you're starting out in a technical field, you often just **"do the thing."**

The **"thing"** is usually whatever's hot at the moment among your peers.

Sure, doing the "thing" can be valuable for getting started fast, but in many cases, it won't **actually solve problem**.

## Solving the problem

Often, people have a good story in their head of how their work will lead to the terminal goal of improving the world. Unfortunately, this story is just as often false.

Let's go through how someone might think about the world's biggest problems today:

### Step 1: Figuring out there is a problem

Take a quick moment to think about the world's biggest problems.

...

Got a few? Great. Let's consider three examples and stick with them:
1. **Global warming:** Climate disasters and mass migration will cause thousands of deaths, both leading to geopolitical instability, so we need governments to reduce carbon emissions immediately.
2. **Uninterpretable general intelligence:** Language models are uninterpretable and it's important for us to understand what happens inside of them so we can change and stop AI agents as they manipulate financial markets or destroy a government's cybersecurity.
3. **Human minds vs AI:** Human minds won't be able to compete with the [ever growing intelligence of AI](https://epochai.org/) so we have to create brain-computer interfaces to improve human processing power to match.

Wait a second.

Did we just propose solutions to all three problems as we thought of them?

Yes, we did.

**This is the curse of the "thing."** 

This curse makes problems implicitly connected to a specific "thing" that will solve the problem. As you go into each field, you will find that each of the above solutions are relatively popular in their respective fields.
### Step 2: Realizing the limits of these solutions

Yet, if we consider the viability of each approach:
1. We're far past the point of no return on global warming and atmospheric CO2 concentrations are already [too high](https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide) for us to solve it simply by reducing emissions[^4].
2. Do we really gain insight from basic interpretability research, or are we working at the [wrong layer of abstraction](https://cyborgism.wiki/), giving ourselves a false sense of security? And is just *understanding* agents really the most effective way to stop them within the time frame we have in mind?
3. Even with BCIs, humans won't outcompete AI. A 10x faster interface (BCI) to a 1x brain still loses to a 10x intelligence with a 100x faster interface (APIs)?

[^4]: When I say point of no return, I mean we have passed the point where CO2 reductions will get us to pre-industrial levels of CO2. And as a side-note, it's honestly pretty neocolonialist to say that developing nations should reduce their emissions when it's exactly increased emissions that made developed nations developed.
### Step 3: Accepting complexity and finding the right solutions

Surprisingly, global problems turn out to be more complex than initially thought. Who would have thought.

The real solutions require us to think all the way to our terminal goal for why the problems are truly problems:
1. To maintain a growing standard of life for humans and animals while solving global warming, we need to invent [new energy technologies](https://www.copenhagenatomics.com/), build more [dams](https://youtu.be/25LW_PG2ZuI), implement [urban flood protection](https://youtu.be/G8TwlnzErV8) and [remove human and animal diseases](https://worksinprogress.co/issue/the-ultra-selfish-gene/)[^8].
2. [Pythia](https://arxiv.org/abs/2304.01373) was all about giving researchers model checkpoints to explore what happens with the weights as we train a foundation model. If you look at papers that cited Pythia, [literally no one did this](https://scholar.google.com/scholar?cites=14127511396791067241&as_sdt=2005&sciodt=0,5&hl=en&oi=gsb). What is going on? And if we don't even know the difference between pre-trained and fine-tuned models, how come so much of interpretability work is happening on fine-tuned models or toy models? Why aren't the absolute first questions of interpretability about this divide instead of [zero of 200 popular research ideas](https://docs.google.com/spreadsheets/u/1/d/1oOdrQ80jDK-aGn-EVdDt3dg65GhmzrvBWzJ6MUZB8n4/edit)[^5]?[^6]
3. With the math above, it looks like human minds won't be able to compete even *with* brain-computer interfaces. Then we can safely discard this solution and pursue A) uploading human minds, B) creating aligned police agents or C) designing international controls for AI training.[^7]

[^8]: Notice that the fourth item isn't even about global warming! "Why will this then solve global warming?" you might ask. Well, if people weren't sick all the time, societies would develop. Earning enough for your family to eat then wouldn't be the first thing on your mind as you wake up. Now you can happily spend brain cycles sorting trash. This is one of the reasons why I'm a big proponent of [progress studies](https://www.theatlantic.com/science/archive/2019/07/we-need-new-science-progress/594946/) (and even national growth targets!).

## Do the thing.

Your goal, if you want to make real change, is to get to Step 3. Along the way, you might find people stuck at earlier stages. Don't let them curse you!

- **Stuck at step 1**: Evangelists, advocating for the "agreed-upon" solutions.
- **Stuck at step 2**: Doomers, who see the problem's difficulty and give up on finding solutions.

The message here is simple: find the true challenges, develop effective solutions, and make a real impact.

Now, go and do the thing!


[^7]: There is a valid case to be made for human-brain interfaces which is that the other methods simply won't work before human-level AGI is here and hence, it's just our best shot. Also, with all these footnotes, this is slowly turning into a Roger Penrose book.
[^5]: Absolutely no shade to Neel (the author), I think he does fantastic work <3 And to his credit, you can see that many questions in the table are actually about solving a problem (e.g. the "Getting rid of superposition" category).
[^6]: What I'm criticizing isn't the [theory of impact for interpretability research](https://www.alignmentforum.org/posts/LNA8mubrByG7SFacm/against-almost-every-theory-of-impact-of-interpretability-1). I love that field and it was one of my early entries into AI safety. But the actual questions asked in the field are frankly unambitious and I'd want junior researchers to ask "what is the hardest problem in AI safety?" and go for that. Then you can always downgrade your interpretability project from there.