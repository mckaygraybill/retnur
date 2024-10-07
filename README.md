# retnur
JS framework & sample implementation for a 2D, turn-based strategy game inspired by the Heroes of Might and Magic series. Detailed instructions will be included on how to customize your own game with graphics, configurations, agents (NPCs), etc.

The name 'retnur' is an anagram of "turner" and "return", reflecting the turn-based style of games and reusable framework nature of the project.

Planned phases:
1. Screen in which you can choose a leader
2. Map screen that allows you to move your hero around
3. Interactions with things in the map that modify state within your leader
4. Turns
5. Random AI agent opponent
6. Troop stacks
7. Battle screen and battle sequencing with random AI agent
9. Victory/defeat conditions and baseline AI

After phase 7 I will take a step back and evaluate. Some ideas for future consideration:

* auto-battle
* path suggestion, including across turns
* fog of war
* NPC baseline profiles (difficulty, predisposition
* multiple leaders
* ability to combine/split leaders or groups
* hotseat play
* siege battles
* terrain
* unit modifiers (XP, items, magic, weakness/resistance, etc.)
* diplomacy
* events (cyclical, random, triggered, etc.)
* mini-map
* more than 2 players

The long-term vision is to make the game highly configurable with some sensible presets. If it turns out to be a fun concept, I could see another project starting that would support a set of backend services that could support online multiplayer games.

I haven't worked much with JS or UIs, nor have I ever designed or developed a non-trivial game from scratch, so this will be a learning journey for me. I expect development to be very slow and sporadic. If you want to contribute or collaborate you are welcome to reach out.

---

**Current status** (_as of 10/2/2024_): Picking things back up; tentatively decided to use Pixi.js.

_Update 2/5/2019_: evaluating 2D JS game engines (Phaser, Cocos2d, Construct2)
