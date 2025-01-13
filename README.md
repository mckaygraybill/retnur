# retnur
JS framework & sample implementation for a 2D, turn-based strategy game inspired by the Heroes of Might and Magic series. Detailed instructions will be included on how to customize your own game with graphics, configurations, agents (NPCs), etc.

The name 'retnur' is an anagram of "turner" and "return", reflecting the turn-based style of games and reusable framework nature of the project.

### Planned phases
1. Screen in which you can choose a leader
2. Map screen that allows you to move your hero around
3. Interactions with things in the map that modify state within your leader, modifying state of map
4. Turns
5. Random AI agent
6. Troop stacks
7. Battle screen and battle sequencing with random AI agent
8. Victory/defeat conditions
9. Baseline AI

After phase 9 I will take a step back and evaluate. Some ideas for future consideration:

* auto-battle (known outcome vs. ambiguous prediction, configurable)
* replay opponent turn
* saving game state (including autosave, potentially configurable)
* path suggestion, including across turns
* fog of war
* NPC baseline profiles (difficulty, predisposition, etc.)
  * could see this turning into a separate library for easily composing custom agents
* multiple leaders
* ability to combine/split leaders or groups
* hotseat play
* siege battles
* diplomacy (alliances, gifting resources, negotiations, honor or social currency, non-aggression pacts, spies & intelligence network, etc. (thinking of Knights of Honor and/or Civ somewhat))
* retreat and surrender capabilities
* hero development (leveling, skills, magic, weakness/resistance, items, etc.)
* unit development (upgrading, leveling, weakness/resistance, etc.)
  * at some point is it possible to promote a unit to become a leader? seems kind of odd but to have a path for it would be fun.
  * what is the difference between a leader and a unit in the game? leaders have names and different roles. leaders can learn more skills. leaders are not stackable. (...)
* town development (buildings, resources, specialization (fort vs. commerce center, etc.), etc.)
* map development (terrain, buildings, events (cyclical, random, triggered, etc.), creature stacks, etc.)
* mini-map
* more than 2 players
* grail-like objects and dynamics (including concepts comparable to obelisks, digging, etc.)
* reconnaissance (e.g., thieves guild, etc.)
* map editor
* map generator
* ability to choose or auto-fit different sized battlefields
* different roles or specializations for leaders (government, construction, statesmanship, diplomacy, trade, business/economy, scouting, defense, war, etc.)
 * how many leaders allowed before it becomes too much? maybe limits on different types? (some require more attention than others)

The long-term vision is to make the sample game highly configurable with some sensible presets. If it turns out to be a fun concept, I could see another project starting that would support a set of backend services that could support online multiplayer games within a predefined API/framework.

Known Issues...

* Does not automatically resize with the window
* What does refreshing the page do to game state? May need to auto-save pretty frequently...

Will be playing with different types of art to demonstrate various styles, fusions, uses, etc. and to spark new or different ideas.

Miscellaneous thoughts

* A traditional fantasy setting may be a go-to default, but there are a lot of different ways you could go with this. Colonial era, antebellum, early 20th century, space, a dodgeball game, ... Magic is optional.
  * You don't even need to "fight", as battles could be conflicts or competitions of other sorts. You could have some sort of, I don't know, courtroom or ballroom event.
* I'm going to need to split out the README into separate parts before long, as this thing has been taken over by brainstorming, updates, etc.
* Is there some more adventure-game, puzzle-ish sort of style that could be incorporated somewhere?
* Time could be made flexible to fit with desired theme as well (instead of days/weeks/months for turns it might be smaller or larger units or something entirely different)

I haven't worked much with JS or UIs, nor have I ever designed or developed a non-trivial game from scratch, so this will be a learning journey for me. I expect development to be very slow, unrefined, and sporadic. I have a separate full-time job and am a parent, so this gets the crumbs or rare indulgence. That said, I would love to see it come to life! If you want to contribute or collaborate you are welcome to reach out.

### Current status
* _Update 01/10/2025_: played with Text some more; searched for some copyright-free images to use; more ideation and readme updates
* _Update 01/02/2025_: ditched the Docker idea (now using `python -m http.server 8000` in project dir (python 3)); simple splash screen
* _Update 12/4/2024_: learning Pixi.js and putting together a baseline deployment Docker container with Nginx
* _Update 10/2/2024_: picking things back up; tentatively decided to use Pixi.js
* _Update 2/5/2019_: evaluating 2D JS game engines (Phaser, Cocos2d, Construct2)

### Related Projects
* VCMI (https://github.com/vcmi/vcmi and https://vcmi.eu/)
* HeroWO.js (https://github.com/HeroWO-js)
* Heroes of Might and Magic III mod: Horn of the Abyss
* Heroes of Might and Magic III mod: The Succession Wars
* Heroes of Might and Magic III mod: The Wake of Gods
