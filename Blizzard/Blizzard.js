var blizzardApp = angular.module("blizzardApp", []);

blizzardApp.controller("blizzController", ['$scope', blizzController])

function blizzController($scope)
{

    $scope.handleRaceClick = handleRaceClick
    
    function handleRaceClick(raceName)
    {
        $scope.currentRace = races[raceName];
    }

    var races = {
        belf:
        {
            FullName: "Blood Elf",
            Faction: "Horde",
            Mount: "Hawkstrider",
            PlayableClasses: "Hunter, Mage, Paladin, Priest, Rogue, Warlock, Death Knight, Warrior, Monk, Demon Hunter",
            Language: "Thalassian, Orcish",
            img: "belf.jpg",
            Lore: "For nearly 7,000 years, high elven society centered on the sacred Sunwell, a magical fount that was created using a vial of pure arcane energy from the first Well of Eternity. Nourished and strengthened by the Sunwell's potent energies, the high elves' enchanted kingdom of Quel'Thalas prospered within the verdant forests north of Lordaeron."
        },
        goblin:
        {
            FullName: "Goblin",
            Faction: "Horde",
            City: "Bilgewater Habor",
            Mount: "Trike",
            PlayableClasses: "Death Knight, Hunter, Mage, Priest, Rogue, Shamon, Warlock, Warrior",
            Language: "Goblin, Orcish",
            img:"goblin.jpg",
            Lore: "Originally the slaves of jungle trolls on the Isle of Kezan, goblins were forced to mine kaja'mite ore out of the volcanic bowels of Mount Kajaro. The trolls used this potent mineral for their voodoo rituals, but it had an unexpected effect on the slaves who were in constant contact with it: kaja'mite generated a startling new cunning and intelligence in the goblin race."
        },
        orc:
        {
            FullName: "Orc",
            Faction: "Horde",
            City: "Orgimmar",
            Mount: "Wolf",
            PlayableClasses: "Hunter, Rogue, Shaman, Warlock, Warrior, Death Knight, Mage, Monk,",
            Language: "Orcish",
            img: "orc.jpg",
            Lore: "Unlike the other races of the Horde, orcs are not native to Azeroth. Initially, they lived as shamanic clans on the lush world of Draenor. They abandoned their peaceful culture when Kil'jaeden, a demon lord of the Burning Legion, corrupted the orcs and used them in his vengeful plot against the draenei, who were exiles from Kil'jaeden's homeworld."
        },
        tauren:
        {
            FullName: "Tauren",
            Faction: "Horde",
            City: "Thunder Bluff",
            Mount: "Kodo",
            PlayableClasses: "Druid, Hunter, Shaman, Warrior, Death Knight, Paladin, Priest, Monk",
            Language: "Taur-ahe, Orcish",
            img: "tauren.jpg",
            Lore: "The peaceful tauren-known in their own tongue as the shu'halo-have long dwelled in Kalimdor, striving to preserve the balance of nature at the behest of their goddess, the Earth Mother. Until recently, the tauren lived as nomads scattered throughout the Barrens, hunting the great kodo beasts native to the arid region.",
        },
        undead:
        {
            FullName: "Undead",
            Faction: "Horde",
            City: "The Undercity",
            Mount: "Skeletal Horse",
            PlayableClasses: "Mage, Priest, Rogue, Warlock, Warrior, Death Knight, Hunter, Monk",
            Language: "Gutterspeak, Orcish",
            img: "https://vignette.wikia.nocookie.net/wowwiki/images/b/b9/Sylvanaswindrunner3.png/revision/latest/scale-to-width-down/319?cb=20140503141754",
            Lore:"Death offered no escape for the scores of humans killed during the Lich King's campaign to scour the living from Lordaeron. Instead, the kingdom's fallen were risen into undeath as Scourge minions and forced to wage an unholy war against everything... and everyone... that they once held dear.",
        },
        troll:
        {
            FullName: "Troll",
            Faction: "Horde",
            City: "Darkspear Isle",
            Mount: "Raptor",
            PlayableClasses: " Hunter, Mage, Priest, Rogue, Shaman, Death Knight, Druid, Warlock, Monk",
            Language: "Zandali, Orcish",
            img: "troll.jpg",
            Lore: "The savage trolls of Azeroth are infamous for their cruelty, dark mysticism, and seething hatred for all other races. Yet one exception among the trolls is the Darkspear tribe and its cunning leader, Vol'jin. Plagued by a history of subservience and exile, this proud tribe was on the brink of extinction when Warchief Thrall and his mighty Horde forces were driven to the trolls' remote island home in the South Seas during a violent storm."
        },
        human:
        {
            FullName: "Human",
            Faction: "Alliance",
            City: "Stormwind City",
            Mount: "Horse",
            PlayableClasses: "Mage, Paladin, Priest, Rogue, Warlock, Warrior, Death Knight, Hunter, Monk",
            Language: "Common",
            img: "human.jpg",
            Lore: "Recent discoveries have shown that humans are descended from the barbaric vrykul, half-giant warriors who live in Northrend. Early humans were primarily a scattered and tribal people for several millennia, until the rising strength of the troll empire forced their strategic unification. Thus the nation of Arathor was formed, along with its capital, the city-state of Strom.",
        },
        gnome:
        {
            FullName: "Gnome",
            Faction: "Alliance",
            City: "Gnomeregan",
            Mount: "Mechanostrider",
            PlayableClasses: "Mage, Rogue, Warlock, Warrior, Death Knight, Priest, Monk, Hunter",
            Language: "Gnome, Common",
            img: "gnome.jpg",
            Lore:"The clever, spunky, and oftentimes eccentric gnomes present a unique paradox among the civilized races of Azeroth. Brilliant inventors with an irrepressibly cheerful disposition, this race has suffered treachery, displacement, and near-genocide. It is their remarkable optimism in the face of such calamity that symbolizes the truly unshakable spirit of the gnomes.",
        },
        dwarf:
        {
            FullName: "Dwarf",
            Faction: "Alliance",
            City: "Ironforge",
            Mount: "Ram",
            PlayableClasses: "Hunter, Paladin, Priest, Rogue, Warrior, Death Knight, Mage, Shaman, Warlock, Monk",
            Language: "Dwarven, Common",
            img: "dwarf.jpg",
            Lore: "The bold and courageous dwarves are an ancient race descended from the earthen-beings of living stone created by the titans when the world was young. Due to a strange malady known as the curse of flesh, the dwarves' earthen progenitors underwent a transformation that turned their rocky hides into soft skin. Ultimately, these creatures of flesh and blood dubbed themselves dwarves and carved out the mighty city of Ironforge in the snowy peaks of Khaz Modan.",
        },
        draenei:
        {
            FullName: "Draenei",
            Faction: "Alliance",
            City: "The Exodar",
            Mount: "Elekk",
            PlayableClasses: "Hunter, Mage, Paladin, Priest, Shaman, Warrior, Death Knight, Monk",
            Language: "Draenei, Common",
            img: "drae.jpg",
            Lore: "Long before the fallen titan, Sargeras, unleashed his demonic Legion on Azeroth, he turned his baleful gaze upon the world of Argus and its highly intelligent inhabitants, the eredar. Believing that this magically gifted race would be a crucial component in his dark quest to undo all of creation, Sargeras contacted the eredar's three leaders - Kil'jaeden, Archimonde, and Velen - and offered them knowledge and power in exchange for their loyalty."
        },
        worgen:
        {
            FullName: "Worgen",
            Faction: "Alliance",
            City: "Gilneas City",
            Mount: "Running Wild",
            PlayableClasses: "Death Knight, Druid, Hunter, Mage, Priest, Rogue, Warlock, Warrior",
            Language: "Gilnean, Common",
            img: "https://wow.gamepedia.com/media/wow.gamepedia.com/thumb/c/c0/Worgen_warrior.jpg/300px-Worgen_warrior.jpg?version=bd3e946b2ed25a5274afb8f6b4dadd13",
            Lore: "Behind the formidable Greymane Wall, a terrible curse has spread throughout the isolated human nation of Gilneas, transforming many of its stalwart citizens into nightmarish beasts known as worgen. The origins of this curse have been fiercely debated, but only recently has the startling truth come to light."
        },
        nelf:
        {
            FullName: "Night Elf",
            Faction: "Alliance",
            City: "Darnassus",
            Mount: "Nightsaber",
            PlayableClasses: "Druid, Hunter, Priest, Rogue, Warrior, Death Knight, Mage, Monk, Demon Hunter",
            Language: "Darnassian, Common",
            img: "nelf.jpg",
            Lore: "The ancient and reclusive night elves have played a pivotal role in shaping Azeroth's fate throughout its history. More than ten thousand years ago, their heroics during the War of the Ancients helped stave off the demonic Burning Legion's first invasion. When the scattered remnants of the Legion on Azeroth rallied together with the vile satyrs centuries later, the night elves again rose to meet the threat. The ensuing War of the Satyr exacted a heavy toll from the night elves, but ultimately they vanquished the forces that had set out to wreak havoc on their world."

        }
    }; 
    
}