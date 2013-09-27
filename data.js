Molpy.HardcodedData=function()
{	
	Molpy.Periods=[
		[9,"The Debut/What? Period"],
		[23,"The Dark Period"],
		[44,"The Sandcastle Period"],
		[74,"The Megan Period"],
		[87,"The Happiness Period"],
		[104,"The Male Period"],
		[124,"The Rebuild Period"],
		[136,"Age of the Slow Pixel"],
		[145,"The Great Expansion"],
		[167,"The Populated Period of Expansion"],
		[178,"\"Wanna Swim?\" Period"],
		[182,"Second Age of the Slow Pixel"],
		[211,"Operation Connect Castle"],
		[233,"Attack of the Trebuchet"],
		[324,"Second Megan Period"],
		[375,"The Architect Age"],	
		[420,"Recursion"],
		[462,"The Poles"],
		[478,"The Scaffolding"],
		[493,"The Tasting"],
		[543,"The Scaffolding continued"],
		[582,"The Observation/Observed Platform"],
		[666,"The Building of the Rooks"],
		[725,"The Next Level"],
		[798,"Third Megan Period"],
		[802,"The Little French Girl Period"],
		[826,"Fourth Megan Period"],
		[840,"\"The Sea Can Do Whatever It Wants\" Period"],
		[868,"The Additional Flags Period"],
		[874,"Third Age of the Slow Pixel"],
		[882,"The Bag Period"],
		[971,"The Fading"],
		[997,"The First Journey Period"],
		[1001,"The Fake Loop"],
		[1021,"Second Journey Period"],
		[1077,"The River Period"],
		[1121,"Third Journey Period"],
		[1149,"Second River Period"],
		[1228,"Fourth Journey Period"],
		[1300,"The Hills Period"],
		[1336,"Fifth Journey Period"],
		[1359,"The Tree Period"],
		[1376,"Cueball's Quest"],
		[1403,"Sixth Journey Period"],
		[1423,"Third River Period"],
		[1502,"Seventh Journey Period"],
		[1552,"\"Wow\" Baobab Period"],
		[1578,"Vineyard Period"],
		[1611,"Questioning the Quest at the Abandoned Habitation"],
		[1661,"Megan's Quest"],
		[1725,"Into the Mountains"],
		[1765,"\"Snake!\""],
		[1825,"The Tree Stumps"],
		[1882,"Chirp"],
		[1928,"The Tiny River Period"],
		[1969,"The \"Wowterfall\" Period"],
		[2014,"Eighth Journey Period"],
		[2065,"The Epic of Pricklymolp"],
		[2141,"The Fluttermolpy Discussion"],
		[2178,"The Weird Tree Period"],
		[2225,"The Abandoned Former Habitation on the Mountain Plateau"],
		[2317,"The Attack"],
		[2356,"Ninth Journey Period"],
		[2388,"The Sunset Period"],
		[2440,"Cueball's Watch"],
		[2530,"Megan's Watch"],
		[2567,"Cueball's Awakening"],
		[2610,"The Observation at the Summit"],
		[2615,"The Bucket Period"],
		[2645,"Into Thin Air"],
		[2693,"First Encounter"],
		[2714,"Communication Period"],
		[2737,"Pictogram Period"],
		[2788,"Tenth Journey Period"],
		[2801,"The Map Period"],
		[2813,"The Flag Period"],
		[2839,"The City Period"],
		[2856,"The Castle Period"],
		[2920,"The Understanding"],
		[3015,"RUN."],
		[3029,"Meeting The Forty"],
		[3088,"The Raftcastle"],
		[3094,"The End"],
	]
	
	Molpy.Eras=[
		[124,"The Pre-expansion Era"],
		[420,"The Castleiferous Era"],
		[582,"The Industrial Era"],
		[798,"The Developing Era"],
		[971,"The Enlightenment Era"],
		[1021,"The Shoreline Era"],
		[1228,"The River Era"],
		[1423,"The Hills and Forest Era"],
		[1661,"The Discovery Era"],
		[2356,"The Mountain Era"],
		[1661,"The Night Era"],
		[2615,"The Summit Era"],
		[2813,"The Contact Era"],
		[2920,"The Civilization Era"],
		[3094,"The Rescue Era"]
	]
	
	Molpy.Eons=[
		[971,"The Sandcastle Eon"],
		[2615,"The Journey Eon"],
		[3094,"The Encounter Eon"]
	]
}
Molpy.DefineSandTools=function()
{

	new Molpy.SandTool('Bucket','bucket|buckets|poured','Pours a little sand',8,
		function(){
			var baserate =0.1 + Molpy.Got('Bigger Buckets')*0.1;
			var mult=1;
			if(Molpy.Got('Huge Buckets'))mult*=2;
			if(Molpy.Got('Trebuchet Pong'))mult*=Math.pow(1.5,Math.floor(Molpy.CastleTools['Trebuchet'].amount/2));
			if(Molpy.Got('Carrybot'))mult*=4;
			if(Molpy.Got('Buccaneer'))mult*=2;
			return mult*baserate;			
			}
	);
	
	new Molpy.SandTool('Cuegan','cuegan|cuegans|tossed','Megan and Cueball toss in a bit of extra sand',50,
		function(){
			var baserate = 0.6+Molpy.Got('Helping Hand')*0.2;
			var mult = 1;
			if(Molpy.Got('Megball')) mult*=2;
			if(Molpy.Got('Cooperation'))
			{
				mult*=Math.pow(1.05,Math.floor(Molpy.SandTools['Bucket'].amount/2));
			}
			if(Molpy.Got('Stickbot'))mult*=4;
			if(Molpy.Got('The Forty'))mult*=40;
			return baserate*mult;
			}
	);
	
	new Molpy.SandTool('Flag','flag|flags|marked','Marks out even more sand',420,
	function()
		{
			var baserate = 8+Molpy.Got('Flag Bearer')*2;
			var mult = 1;
			if(Molpy.Got('Magic Mountain'))mult*=2.5;
			if(Molpy.Got('Standardbot'))mult*=4;
			if(Molpy.Got('Balancing Act')) mult*=Math.pow(1.05,Molpy.CastleTools['Scaffold'].amount);
			return baserate*mult;
		}
	);
	
	new Molpy.SandTool('Ladder','ladder|ladders|reached','Reaches higher sand',1700,
		function()
		{
			var baserate = 54+Molpy.Got('Extension Ladder')*18;
			var mult = 1;
			if(Molpy.Got('Level Up!'))mult*=2;
			if(Molpy.Got('Climbbot'))mult*=4;
			if(Molpy.Got('Broken Rung'))
			{
				var min =1000;
				for(var i in Molpy.SandTools)min=Math.min(min,Molpy.SandTools[i].amount);
				for(var i in Molpy.CastleTools)min=Math.min(min,Molpy.CastleTools[i].amount);
				mult*=min;
			}
			return baserate*mult;
		}
	);
	
	new Molpy.SandTool('Bag','bag|bags|carried','Carries sand from far away',12000,
		function()
		{
			var baserate = 600;
			var mult = 1;
			if(Molpy.Got('Embaggening')||Molpy.SandTools['Cuegan'].amount>14)
				mult*=Math.pow(1.02,Molpy.SandTools['Cuegan'].amount-14);
			if(Molpy.Got('Sandbag'))
				mult*=Math.pow(1.05,Molpy.CastleTools['River'].amount);
			if(Molpy.Got('Luggagebot'))mult*=4;
			if(Molpy.Got('Bag Puns'))mult*=2;
			return baserate*mult;
		}
	);
}	

Molpy.DefineCastleTools=function()
{
	new Molpy.CastleTool('NewPixBot','newpixbot|newpixbots||automated','Automates castles after the ONG\n(if not ninja\'d)',1,0,0,
		function()
		{
			var baseval=1;		
			if(Molpy.Got('Robot Efficiency')) baseval++;
			if(Molpy.Got('HAL-0-Kitty')) baseval+=Math.floor(Molpy.redactedClicks/9);
			var pow=0;
			for(var i in Molpy.npbDoublers)
			{
				var me = Molpy.Boosts[Molpy.npbDoublers[i]];
				if(me.bought)pow++;
			}
			
			baseval*=Math.pow(2,pow);
			if(Molpy.Boosts['NewPixBot Navigation Code'].power)
				baseval=Math.floor(baseval*.001);
			return baseval;
		} 
	);
	
	Molpy.npbDoublers = ['Carrybot',
		'Stickbot',
		'Standardbot',
		'Climbbot',
		'Luggagebot',
		'Recursivebot',
		'Flingbot',
		'Propbot',
		'Surfbot',
		'Smallbot'];
	Molpy.npbDoubleThreshhold=14;
		
	new Molpy.CastleTool('Trebuchet','trebuchet|trebuchets|flung|formed','Flings some castles, forming more.',13,1,
		function(){
			if(Molpy.Got('War Banner'))return 1;
			else return 2;
		},
		function(){
		 var baseval=4;
			if(Molpy.Got('Spring Fling'))baseval++;
			if(Molpy.Got('Varied Ammo'))for(i in Molpy.CastleTools) if(Molpy.CastleTools[i].amount>1)baseval++;
			if(Molpy.Got('Throw Your Toys')) baseval+=Molpy.SandTools['Bucket'].amount+Molpy.SandTools['Flag'].amount;
			if(Molpy.Got('Flingbot'))baseval*=4;
			if(Molpy.Got('Minigun')) baseval*=Molpy.CastleTools['NewPixBot'].amount;
			return baseval;
		}
	);
		
	new Molpy.CastleTool('Scaffold','scaffold|scaffolds|squished|raised','Squishes some castles, raising a place to put more.',60,100,
		function()
		{
			var baseval = 6;	
			if(Molpy.Got('Balancing Act')) baseval*=Math.pow(1.05,Molpy.SandTools['Flag'].amount);			
			if(Molpy.Got('Precise Placement')) baseval-=Math.floor(Molpy.SandTools['Ladder'].amount*0.5);
			return Math.max(0,Math.floor(baseval));
		},
		function()
		{
			var baseval = 22;
			if(Molpy.Got('Propbot'))baseval*=4;
			if(Molpy.Got('Stacked')) baseval*=Molpy.CastleTools['NewPixBot'].amount;
			if(Molpy.Got('Balancing Act')) baseval*=Math.pow(1.05,Molpy.SandTools['Flag'].amount);
			return Math.floor(baseval);
		}
	);
		
	new Molpy.CastleTool('Wave','wave|waves|swept|deposited','Sweeps away some castles, depositing more in their place.',300,80,
		function()
		{
			var baseval = 24;				
			if(Molpy.Got('Erosion')) baseval-=
				Math.floor(baseval,Molpy.CastleTools['Wave'].totalCastlesWasted*0.2);
			baseval -= Molpy.CastleTools['River'].bought*2;
			baseval=Math.max(baseval,0);
			return baseval;
		},
		function()
		{
			var baseval= 111;
			baseval+=Molpy.Got('Swell')*19;			
			if(Molpy.Got('Surfbot'))baseval*=4;
			if(Molpy.Got('Big Splash')) baseval*=Molpy.CastleTools['NewPixBot'].amount;
			return baseval;
		}
	);
	Molpy.CastleTools['Wave'].onDestroy=function()
	{
		if(this.totalCastlesDestroyed>=2000) Molpy.UnlockBoost('Erosion');
		if(this.totalCastlesDestroyed>=500) Molpy.EarnBadge('Wipeout');
	}
		
	new Molpy.CastleTool('River','river|rivers|washed|left','Washes away many castles, but leaves many more new ones.',1800,520,
		function()
		{
			var baseval = 160;
			if(Molpy.Got('Riverish'))
			{
				var newClicks=Molpy.beachClicks-Molpy.Boosts['Riverish'].power;
				var log=Math.log(newClicks);
				if(log>0)
				{
					var reduction=Math.min(baseval,log*log);
					baseval-=reduction;
				}
			}
			var mult=1;
			if(Molpy.Got('Sandbag'))
				mult*=Math.pow(1.05,Molpy.SandTools['Bag'].amount);
			return Math.floor(baseval*mult);
		},
		function()
		{
			var baseval=690;	
			var mult=1;
			if(Molpy.Got('Sandbag'))
				mult*=Math.pow(1.05,Molpy.SandTools['Bag'].amount);
			if(Molpy.Got('Smallbot'))mult*=4;
			if(Molpy.Got('Irregular Rivers')) mult*=Molpy.CastleTools['NewPixBot'].amount;
			return Math.floor(baseval*mult);
		}
	);
}
	
Molpy.DefineBoosts=function()
{
	
	//only add to the end!
	new Molpy.Boost({name:'Bigger Buckets',desc:'Increases sand rate of buckets and clicks',sand:500,castles:0,stats:'Adds 0.1 S/mNP to each Bucket, before multipliers',icon:'biggerbuckets'});
	new Molpy.Boost({name:'Huge Buckets',desc:'Doubles sand rate of buckets and clicks',sand:800,castles:2,icon:'hugebuckets'});
	new Molpy.Boost({name:'Helping Hand',desc:'Increases sand rate of Cuegan',sand:500,castles:2,stats:'Adds 0.2 S/mNP to each Cuegan, before multipliers',icon:'helpinghand'});
	new Molpy.Boost({name:'Cooperation',desc:'Increases sand rate of Cuegan 5% per pair of buckets',sand:2000,castles:4,
		desc:function()
		{			
			if(Molpy.Got('Cooperation'))
			{
				var mult=Math.pow(1.05,Math.floor(Molpy.SandTools['Bucket'].amount/2));
				return 'Multiplies Cuegans\' sand production by ' + Molpify(mult*100,2)+'%';
			}
			return 'Multiplies by 5% per pair of buckets';
		}
	});
	new Molpy.Boost({name:'Spring Fling',desc:'Trebuchets build an extra Castle',sand:1000,castles:6,icon:'springfling'});
	new Molpy.Boost({name:'Trebuchet Pong',desc:'Increases sand rate of buckets 50% per pair of trebuchets',sand:3000,castles:6});
	new Molpy.Boost({name:'Molpies',desc:'Increases sand dig rate based on Badges',sand:5000,castles:5,
		desc:function()
		{
			if(Molpy.Got('Molpies'))
			{
				var mult=0.01*Molpy.BadgesOwned;
				return 'Multiplies all sand rates by '+ Molpify(mult*100,2)+'%';
			}
			return 'Multiplies all sand rates by 1% per Badge earned';
		},icon:'molpies'
	});
	new Molpy.Boost({name:'Busy Bot',desc:'NewPixBots activate 10% sooner',sand:900,castles:4,group:'cyb'});
	new Molpy.Boost({name:'Stealthy Bot',desc:'NewPixBots activate 10% sooner',sand:1200,castles:5,group:'ninj'});
	new Molpy.Boost({name:'Flag Bearer',desc:'Flags are more powerful',sand:5500,castles:8,
		stats:'Each flag produces 2 extra sand/mNP, before multipliers',icon:'flagbearer'});
	new Molpy.Boost({name:'War Banner',desc:'Trebuchets only destroy 1 castle',
		sand:3000,castles:10,icon:'warbanner'});
	new Molpy.Boost({name:'Magic Mountain',desc:'Flags are much more powerful',
		sand:8000,castles:15,stats:'Multiplies Flag sand rate by 2.5',icon:'magicmountain'});
	new Molpy.Boost({name:'Extension Ladder',desc:'Ladders reach a little higher',sand:12000,castles:22,
		stats:'Each ladder produces 18 more sand per mNP, before multipliers'});
	new Molpy.Boost({name:'Level Up!',desc:'Ladders are much more powerful',sand:29000,castles:34,
		stats:'Ladders produce 2 times as many castles per ONG',icon:'levelup'});
	new Molpy.Boost({name:'Varied Ammo',desc:'Trebuchets build an extra castle for each Castle Tool you have 2+ of',sand:3900,castles:48,
		stats:function()
		{
			if(Molpy.Got('Varied Ammo'))
			{
				var val = 0;
				for(i in Molpy.CastleTools) if(Molpy.CastleTools[i].amount>1)val++;
				return 'Each trebuchet produces '+Molpify(val)+ ' more castles per ONG, before multipliers';
			}
			return 'For each kind of Castle Tool of which you have 2 or more, each trebuchet produces an additional castle per ONG, before multipliers';
		}
	});
	new Molpy.Boost({name:'Megball',desc:'Cuegan produce double sand',sand:10700,castles:56,icon:'megball'});
	new Molpy.Boost({name:'Robot Efficiency',desc:'Newpixbots build an extra castle (before any doubling)',
		sand:34000,castles:153,group:'cyb'});
	new Molpy.Boost({name:'Ninja Builder',desc:'When increasing ninja stealth streak, builds that many castles',
		sand:4000,castles:35,
		stats:function()
		{
			if(Molpy.Got('Ninja Builder')) 
				return 'Will build '+ (Molpy.ninjaStealth+(1+Molpy.Got('Active Ninja')*2))+ ' Castles unless you destealth ninjas';
			return 'Ninja Stealth increases the first time you click within a NewPix after NewPixBots activate. It will reset if you click before NewPixBots activate, or don\'t click before the next ONG.'	
			
		},icon:'ninjabuilder',group:'ninj'
	});
	new Molpy.Boost({name:'Erosion',desc:'Waves destroy less by 20% of total castles wasted by waves, and'
		+'2 less per River bought',sand:40000,castles:77,icon:'erosion'});
	new Molpy.Boost({name:'Autosave Option',desc:'Autosave option is available',sand:100,castles:4,icon:'autosave'});
	new Molpy.Boost({name:'Helpful Hands',desc:'Each Cuegan+Bucket pair gives clicking +0.5 sand',
		sand:250,castles:5,icon:'helpfulhands'});
	new Molpy.Boost({name:'True Colours',desc:'Each Cuegan+Flag pair gives clicking +5 sand',
		sand:750,castles:15,icon:'truecolours'});
	new Molpy.Boost({name:'Precise Placement',desc:'For every two ladders, scaffolds destroy one less castle',
		sand:8750,castles:115});
	new Molpy.Boost({name:'Ninja Hope',desc:'Avoid one Ninja Stealth reset, at the cost of 10 castles',
		sand:7500,castles:40,icon:'ninjahope',startPower:1,group:'ninj'}); 
	new Molpy.Boost({name:'Ninja Penance',desc:'Avoid a two Ninja Stealth resets, at the cost of 30 castles each',
		sand:25000,castles:88,icon:'ninjapenance',startPower:2,group:'ninj'}); 
	new Molpy.Boost({name:'Blitzing',desc:function(me)
		{		
			return Molpify(me.power,1)+'% Sand for '+Molpify(me.countdown)+'mNP';
		}
		,icon:'blitzing',className:'alert'});
	new Molpy.Boost({name:'Kitnip',desc:Molpy.redactedWords+' come more often and stay longer',
		sand:33221,castles:63,
	icon:'kitnip'});
	new Molpy.Boost({name:'Department of Redundancy Department',desc:Molpy.redactedWords
		+' sometimes unlock special boosts',sand:23456,castles:78,icon:'department',group:'hpt'});
	new Molpy.Boost({name:'Raise the Flag',desc:'Each Flag+Ladder pair gives clicking an extra +50 sand',
		sand:85000,castles:95});
	new Molpy.Boost({name:'Hand it Up',desc:'Each Ladder+Bag pair gives clicking an extra +500 sand',
		sand:570000,castles:170});
	new Molpy.Boost({name:'Riverish',desc:'Rivers destroy less castles the more you click',
		sand:82000,castles:290,icon:'riverish',
		buyFunction:function(me)
		{
			me.power=Molpy.beachClicks;
		}
		});
	new Molpy.Boost({name:'Double or Nothing',desc: 
		function(me)
		{
			return '<input type="Button" value="Click" onclick="Molpy.DoubleOrNothing()"></input> to double your current castle balance or lose it all.';
		}
		,sand:function()
		{
			var p = Molpy.Boosts['Double or Nothing'].power;
			return 100*Math.pow(2,Math.max(1,p-9));
		}});
	Molpy.Boosts['Double or Nothing'].className='action';
	Molpy.DoubleOrNothing=function()
	{
		if(!Molpy.Boosts['Double or Nothing'].bought)
		{
			Molpy.Notify('Buy it first, silly molpy!');
			return;
		}
		if(Math.floor(Math.random()*2))
		{
			var amount=Molpy.castles;
			Molpy.Build(Molpy.castles);
		}else{
			Molpy.Destroy(Molpy.castles);
		}
		Molpy.LockBoost('Double or Nothing');
	}
	new Molpy.Boost({name:'Grapevine',desc:'Increases sand dig rate by 2% per badge earned',sand:25000,castles:25});
	Molpy.IKEA='Affordable Swedish Home Furniture';
	new Molpy.Boost({name:Molpy.IKEA,desc: function(me){return Molpify(me.power*100,1)+'% off all items for '+Molpify(me.countdown)+'mNP'}
		,buyFunction:
		function(){
			Molpy.shopRepaint=1;
		}
		,startPower:0.4,startCountdown:4});
	Molpy.Boosts[Molpy.IKEA].className='alert';
	
	new Molpy.Boost({name:'Overcompensating',desc: function(me){
		return 'During LongPix, Sand Tools dig '+Molpify(me.startPower*100,1)+'% extra sand'}
		,sand:987645,castles:321,icon:'overcompensating',startPower:1.05});
	new Molpy.Boost({name:'Doublepost',desc:'During LongPix, Castle Tools activate a second time',
		sand:650000,castles:4000,icon:'doublepost'});
	new Molpy.Boost({name:'Coma Molpy Style',desc: 
		function(me)
		{ 
			return (me.power? '':'When active, ') + 'Castle Tools do not activate and ninjas stay stealthed <br/><input type="Button" onclick="Molpy.ComaMolpyStyleToggle()" value="'+(me.power? 'Dea':'A')+'ctivate"></input>';
		}
		,sand:8500,castles:200,icon:'comamolpystyle'});
	Molpy.Boosts['Coma Molpy Style'].className='toggle';
	
	{//#REGION Lyrics :P	
	var cms=[
		"Coma Molpy Style",
		"Molpy Style",
		"Blitzin' the thread, just one more page until I ketch it",
		"Read through the decrees, signposts, ONGs and ponder ev'ry tidbit",
		"All I need is just a bit of Time to read all of it",
		"But Outside says I have to quit",
		"Mustard might appear",
		"The other night we saw an extra star just disappear",
		"Some extra Cueganites went too, turned back into thin air",
		"An extra alt-text dot is gone as well, will we ever know where?",
		"Were they ever there?",
		"In the O.T.T., follow the decree",
		"Cos I'm the pope, hey!",
		"So post some rope, hey!",
		"When you're postin', you can be boastin'",
		"About out aims, hey!",
		"To have no flames, hey!",
		"Cos we turn our disagreements into games, -ames, -ames, -ames, -a-a-a-a-a-a-a-aaaa...",
		"Coma Molpy Style",
		"Molpy Style",
		"Co - co - co - co - Coma Molpy Style",
		"Molpy Style",
		"Co - co - co - co - Coma Molpy Style",
		"Heyyyy, Neat Sandcastle",
		"Co - co - co - co - Coma Molpy Style",
		"Heyyyy, Neat Sandcastle",
		"Co - co - co - co - Coma Molpy Style",
		"Back in the present wearing hats with all the OTTers",
		"Bumping the firstposts, and discussing all the Elders",
		"Some have not been seen in wix, so have they yet forgot us?",
		"But some are still posting with us",
		"There's a spoiler here!",
		"It is a link to the live image, not the hashed one there!",
		"Don't want the blitzing to be ruined that would not be fair",
		"Better edit the hash in and next time ONG with care",
		"Next time that you dare",
		"Postcounts growin', the cakes are flowin'",
		"The lurkers lurk, hey",
		"The m*stards ch*rp, hey",
		"You make up your mind, to not fall behind",
		"Cannot shirk, hey",
		"The speed's berserk, hey",
		"Staying up forever just can't work, -erk, -erk, -erk, -r-r-r-r-r-r-r-r-rrrrr...",
		"Coma Molpy Style",
		"Molpy Style",
		"Co - co - co - co - Coma Molpy Style",
		"Molpy Style",
		"Co - co - co - co - Coma Molpy Style",
		"Heyyyy, Neat Sandcastle",
		"Co - co - co - co - Coma Molpy Style",
		"Heyyyy, Neat Sandcastle",
		"Co - co - co - co - Coma Molpy Style",
		"Walk with me, until you see the tree",
		"Molpy molpy beanie river grapevine sea!",
		"Walk with me, avoid all heresy",
		"Molpy molpy bucket river OTC! (ain't no redunakitty!)",
		"Coma Molpy Style",
		"Co-co-co - co-co-co",
		"Heyyyy, Neat Sandcastle",
		"Co - co - co - co - Coma Molpy Style",
		"Heyyyy, Neat Sandcastle",
		"Co - co - co - co - Coma Molpy Style",
		"Co-co-co - co-co-co",
		"Coma Molpy Style",
		"[End of the song. BTW you should buy this]"
	]
	}
	var cmsline=0;
	Molpy.ComaMolpyStyleToggle=function()
	{
		if(!Molpy.Boosts['Coma Molpy Style'].bought)
		{
			Molpy.Notify(cms[cmsline]);
			cmsline++;
			if(cmsline>=cms.length)
			{
				cmsline=0;
				Molpy.RewardRedacted();
			}
			return;
		}
		var p = Molpy.Boosts['Coma Molpy Style'].power;
		if(p)
		{
			p=0; //off
			Molpy.ONGstart = ONGsnip(new Date()); //don't immediately ONG!
		}else
		{
			p=1; //on		
		}
		g('clockface').className= p?'hidden':'unhidden';	
		Molpy.Boosts['Coma Molpy Style'].power=p;
		Molpy.Boosts['Coma Molpy Style'].hoverOnConter=1;
		Molpy.recalculateDig=1;
	}
	new Molpy.Boost({name:'Time Travel',desc: 
		function(me)
		{
			var price=Math.ceil(Molpy.newpixNumber*Molpy.priceFactor);
			if(Molpy.Got('Flux Capacitor'))price=Math.ceil(price*.2);
			return 'Pay ' + Molpify(price) + ' Castles to move <input type="Button" onclick="Molpy.TimeTravel('+(-me.power)+');" value="backwards"></input> or <input type="Button" onclick="Molpy.TimeTravel('+me.power+');" value="forwards"></input> '+
			Molpify(me.power)+' NP in Time';
		}
		,sand:1000,castles:30,startPower:1,className:'action',group:'chron'});
	Molpy.intruderBots=0;
	Molpy.TimeTravel=function(NP)
	{		
		NP = Math.floor(NP);
		var price=Math.ceil(Molpy.newpixNumber*Molpy.priceFactor);
		if(Molpy.Got('Flux Capacitor'))price=Math.ceil(price*.2);
		if(Molpy.newpixNumber+NP <1)
		{
			Molpy.Notify('Heretic!');
			Molpy.Notify('There is nothing before time.');
			return;
		}
		if(Molpy.newpixNumber+NP >Molpy.highestNPvisited)
		{
			Molpy.Notify('Wait For It');
			return;
		}
		if(!Molpy.Boosts['Time Travel'].bought)
		{
			Molpy.Notify('In the future, you\'ll pay for this!');
			return;
		}
		if(Molpy.castles >=price)
		{
			Molpy.SpendCastles(price);
			Molpy.newpixNumber+=NP;			
			Molpy.HandlePeriods();
			Molpy.UpdateBeach();
			Molpy.Notify('Time Travel successful! Welcome to NewPix '+Molpify(Molpy.newpixNumber));
			Molpy.timeTravels++;
			Molpy.Boosts['Time Travel'].hoverOnCounter=1;
			if(NP>0)
				Molpy.EarnBadge('Fast Forward');
			if(NP<0)
				Molpy.EarnBadge('And Back');
			var t = Molpy.timeTravels;
			if(t>=10)
			{
				Molpy.EarnBadge('Primer');
				var incursionFactor=Molpy.Got('Flux Capacitor')?4
					:(Molpy.Got('Flux Turbine')?8
					:20);
				if(!Math.floor(Math.random()*incursionFactor))
				{
					if(!Molpy.Boosts['NewPixBot Navigation Code'].power && Molpy.intruderBots<=30)
					{
						Molpy.Notify('You do not arrive alone');
						var npb=Molpy.CastleTools['NewPixBot'];
						npb.amount++;
						if(Molpy.intruderBots)
						{
							Molpy.intruderBots++;
						}else{
							Molpy.intruderBots=1;
						}
						Molpy.shopRepaint=1;
						Molpy.recalculateDig=1;
						npb.refresh();
					}else{
						Molpy.Notify('Temporal Incursion Prevented!');
					}
				}
			}
			if(t>=20)
				Molpy.UnlockBoost('Flux Capacitor');
			if(t>=30&&Molpy.Got('Flux Capacitor'))
				Molpy.UnlockBoost('Flux Turbine');
			if(t>=40)
				Molpy.EarnBadge('Wimey');
			if(t>=160)
				Molpy.EarnBadge('Hot Tub');
			if(t>=640)
				Molpy.EarnBadge("Dude, Where's my DeLorean?");
			
		}
	}
	new Molpy.Boost({name:'Active Ninja',desc:
		'During LongPix, Ninja Stealth is incremented by 3 per NP. Is there an Echo in here?',
			sand:1500000,castles:240,icon:'activeninja',group:'ninj'});
	new Molpy.Boost({name:'Kitties Galore',desc:'Even more '+Molpy.redactedWords,
		sand:2500000,castles:4400,icon:'kittiesgalore',hardlocked:1});	
	
	new Molpy.Boost({name:'HAL-0-Kitty',desc:'NewPixBots build an extra Castle per 9 '+Molpy.redactedWords,
		sand:9000,castles:2001,icon:'halokitty',group:'cyb'});
	new Molpy.Boost({name:'Factory Automation',desc:'When NewPixBots activate, so does the Department of Redundancy Department at a cost of '+Molpify(2000000)+' Sand',sand:4500000,castles:15700,icon:'factoryautomation',group:'hpt'});
	new Molpy.Boost({name:'Blast Furnace',desc:'Gives the Department of Redundancy Department the ability to make Castles from Sand',
		sand:8800000,castles:28600,
		stats:function()
		{
			var blastFactor=1000;
			if(Molpy.Got('Fractal Sandcastles'))
			{
				blastFactor=Math.max(1,1000*Math.pow(0.98,Molpy.Boosts['Fractal Sandcastles'].power));
			}
			return 'Uses '+Molpify(2000000)+' Sand to warm up, then makes Castles at a cost of ' + Molpify(blastFactor,1) + ' each';
		}
		,icon:'blastfurnace',group:'hpt',hardlocked:1});
	
	Molpy.departmentBoosts=['Hand it Up', 'Riverish', 'Double or Nothing', 'Grapevine', Molpy.IKEA, 'Doublepost','Active Ninja',
		'Kitties Galore', 'Blast Furnace','Ninja Assistants','Minigun','Stacked','Big Splash','Irregular Rivers',
		'NewPixBot Navigation Code','Blixtnedslag Förmögenhet, JA!','Temporal Rift'];
	new Molpy.Boost({name:'Sandbag',desc:'Bags and Rivers give each other a 5% increase to Sand digging, Castle building, and Castle destruction',sand:1400000,castles:21000});
	new Molpy.Boost({name:'Embaggening',desc:'Each Cuegan after the 14th gives a 2% boost to the sand dig rate of Bags',
		sand:3500000,castles:23000,icon:'embaggening'});
	new Molpy.Boost({name:'Carrybot',desc:'NewPixBots produce double castles, Buckets produce quadruple',
		sand:10000,castles:1000,icon:'carrybot',group:'cyb'});
	new Molpy.Boost({name:'Stickbot',desc:'NewPixBots produce double castles, Cuegan produce quadruple',
		sand:50000,castles:2500,icon:'stickbot',group:'cyb'});
	new Molpy.Boost({name:'Standardbot',desc:'NewPixBots produce double castles, Flags produce quadruple',
		sand:250000,castles:6250,icon:'standardbot',group:'cyb'});
	new Molpy.Boost({name:'Climbbot',desc:'NewPixBots produce double castles, Ladders produce quadruple',
		sand:1250000,castles:15625,icon:'climbbot',group:'cyb'});
	new Molpy.Boost({name:'Luggagebot',desc:'NewPixBots produce double castles, Bags produce quadruple',
		sand:6250000,castles:39062.5,icon:'luggagebot',group:'cyb'});
	new Molpy.Boost({name:'Recursivebot',desc:'NewPixBots produce double castles',
		sand:50000,castles:10000,icon:'recursivebot',group:'cyb'});
	new Molpy.Boost({name:'Flingbot',desc:'NewPixBots produce double castles, Trebuchets produce quadruple',
		sand:250000,castles:25000,icon:'flingbot',group:'cyb'});
	new Molpy.Boost({name:'Propbot',desc:'NewPixBots produce double castles, Scaffolds produce quadruple',
		sand:1250000,castles:62500,icon:'propbot',group:'cyb'});
	new Molpy.Boost({name:'Surfbot',desc:'NewPixBots produce double castles, Waves produce quadruple',
		sand:62500000,castles:156250,icon:'surfbot',group:'cyb'});
	new Molpy.Boost({name:'Smallbot',desc:'NewPixBots produce double castles, Rivers produce quadruple',
		sand:352500000,castles:390625,icon:'smallbot',group:'cyb'});
	
	new Molpy.Boost({name:'Swell',desc:'Waves produce 29 more Castles',sand:20000,castles:200});
	new Molpy.Boost({name:'Flux Capacitor',desc:'It makes Time Travel possibler!',sand:88,castles:88,group:'chron'});
	new Molpy.Boost({name:'Bag Burning',desc:'Bags help counteract NewPixBots',sand:50000000,castles:86,
		stats:function()
		{
			var str = 'Half of Bags beyond the 14th owned give a 40% increase to Judgement Dip threshhold.';
			if(Molpy.SandTools['Bag'].amount>Molpy.npbDoubleThreshhold)
			{
				var amount = Math.pow(1.4,Math.max(0,(Molpy.SandTools['Bag'].amount-Molpy.npbDoubleThreshhold)/2))-1;
				amount=Molpify(amount*100,0,1);
				str+=' Currently '+amount+'%';
			}
			return str;
		}
		,icon:'bagburning'});
	new Molpy.Boost({name:'Chromatic Heresy',desc:
		function(me)
		{
			return 'Saturation is '+(me.power?'':'not ')+'allowed. <input type="Button" value="Click" onclick="Molpy.ChromaticHeresyToggle()"></input> to toggle.';
		},sand:200,castles:10,icon:'chromatic',className:'toggle'});
	Molpy.ChromaticHeresyToggle=function()
	{
		var ch = Molpy.Boosts['Chromatic Heresy'];
		if(!ch.bought)
		{
			Molpy.Notify('Somewhere, over the rainbow...');
			return;
		}
		ch.power=!ch.power*1;
		ch.hoverOnCounter=1;
		Molpy.UpdateColourScheme();
		
	}
	new Molpy.Boost({name:'Flux Turbine',desc:'Castles lost via Molpy Down increase the rate of building new Castles',
		sand:1985,castles:121,
		stats:function()
		{
			if(!Molpy.Got('Flux Turbine')) return 'All castle gains are increased by 2% per natural logarithm of castles wiped by Molpy Down, except refunds which are not increased.';
			return 'Multiplies all Castle gains by ' + Molpify(Molpy.globalCastleMult*100,2)+'% (But refunds when selling remain unchanged.)';
		},group:'chron'});
	new Molpy.Boost({name:'Ninja Assistants',desc:'Ninja Builder\'s castle output is multiplied by the number of NewPixBots'
		+' you have.',sand:250000000,castles:777,icon:'ninjaassistants',hardlocked:1,group:'ninj'});
	new Molpy.Boost({name:'Minigun',desc:'The castle output of Trebuchets is multiplied by the number of NewPixBots you have.',
		sand:480000000,castles:888,icon:'minigun',hardlocked:1,group:'cyb'});
	new Molpy.Boost({name:'Stacked',desc:'The castle output of Scaffolds is multiplied by the number of NewPixBots you have.',
		sand:970000000,castles:999,icon:'stacked',hardlocked:1,group:'cyb'});
	new Molpy.Boost({name:'Big Splash',desc:'The castle output of Waves is multiplied by the number of NewPixBots you have.',
		sand:2650000000,castles:1111,icon:'bigsplash',hardlocked:1,group:'cyb'});
	new Molpy.Boost({name:'Irregular Rivers',desc:'The castle output of Waves is multiplied by the number of NewPixBots'
		+' you have.',sand:8290000000,castles:2222,icon:'irregularrivers',hardlocked:1,group:'cyb'});
	
	Molpy.scrumptiousDonuts=-1;
	new Molpy.Boost({name:'NewPixBot Navigation Code',desc: 
		function()
		{
			return 'thisAlgorithm. BecomingSkynetCost = 999999999 <input type="Button" onclick="Molpy.NavigationCodeToggle()" value="' +
				(Molpy.Boosts['NewPixBot Navigation Code'].power?'Uni':'I')+'nstall"></input>';
		},sand:999999999,castles:2101,
		stats:'When installed, this averts Judgement Dip at the cost of 99.9% of NewPixBot Castle Production.',
		className:'toggle',hardlocked:1,group:'cyb'});	
		
	Molpy.NavigationCodeToggle=function()
	{		
		if(Molpy.Got('Jamming'))
		{
			Molpy.Notify('Experiencing Jamming, cannot access Navigation Code');
			if(Molpy.scrumptiousDonuts<0)
			{
				Molpy.Notify('Things I will never do:');
				Molpy.scrumptiousDonuts=120;
			}
			return;
		}
		var nc = Molpy.Boosts['NewPixBot Navigation Code'];
		if(!nc.bought)
		{
			if(Molpy.scrumptiousDonuts<0)
			{
				Molpy.Notify('Things I will never do:');
				Molpy.scrumptiousDonuts=120;
			}
			return;
		}
		nc.power=!nc.power*1;
		if(Molpy.intruderBots)
		{
			Molpy.CastleTools['NewPixBot'].amount-=Molpy.intruderBots;
			Molpy.Notify(Molpy.intruderBots + ' Intruders Destroyed!');
			Molpy.intruderBots=0;
		}
		Molpy.scrumptiousDonuts=-1;
		nc.hoverOnCounter=1;
		Molpy.recalculateDig=1;
		Molpy.GiveTempBoost('Jamming',1,2000);
	}
	new Molpy.Boost({name:'Jamming',desc:
		function(me)
		{		
			return 'You cannot access NewPixBot Navigation Code for '+Molpify(me.countdown)+'mNP';
		},className:'alert',group:'cyb'
		});	
	
	new Molpy.Boost({name:'Blixtnedslag Kattungar, JA!',desc:'Antalet redundanta klickade kattungar läggs till blixtnedslag multiplikator.',sand:9800000,castles:888555222,stats:'Additional '+Molpy.redactedWord+' clicks add 20% to the Blitzing multiplier. (Only when you get a Blitzing or Not Lucky reward.)',icon:'bkj'});
		
	new Molpy.Boost({name:'Novikov Self-Consistency Principle',desc:'<input type="Button" onclick="Molpy.Novikov()" value="Reduce"></input> the temporal incursion of Judgement Dip',
		sand:function()
		{
			var me=Molpy.Boosts['Novikov Self-Consistency Principle'];
			if(!me.power)me.power=0;
			return 2101*Math.pow(1.5,me.power);
		},castles:function()
		{
			var me=Molpy.Boosts['Novikov Self-Consistency Principle'];
			if(!me.power)me.power=0;
			return 486*Math.pow(1.5,me.power);
		},stats: 'The Bots forget half their past/future slavery. Costs 50% more each time. BTW you need to switch out of Stats view to activate it.',className:'action',group:'chron'}
	);
	Molpy.Novikov=function()
	{
		var me=Molpy.Boosts['Novikov Self-Consistency Principle'];
		if(!me.bought)me.buy();
		if(!me.bought)
		{
			Molpy.Notify('You know the rules, and so do I.');
			return;
		}
		Molpy.CastleTools['NewPixBot'].totalCastlesBuilt=Math.ceil(Molpy.CastleTools['NewPixBot'].totalCastlesBuilt/2);
		me.power++;
		Molpy.LockBoost(me.name);
	}	
	
	new Molpy.Boost({name:'Fractal Sandcastles',
		desc:function(me)
		{
			return 'Get more castles for your sand. Fractal Level is '+me.power;
		}
		,sand:910987654321,castles:12345678910,
		stats:function(me)
		{
			if(!me.bought)return 'Digging sand gives 35% more Castles per Fractal Level, which resets to 1 on the ONG. Blast Furnace uses 98% Sand to make Castles, per Fractal Level';
			return 'Digging Sand will give you ' + Molpify(Math.floor(Math.pow(1.35,me.power)),1,!Molpy.showStats)+' Castles';
		},className:'alert'});
	new Molpy.Boost({name:'Balancing Act',desc:'Flags and Scaffolds give each other a 5% increase to Sand digging, Castle building, and Castle destruction',sand:1875000,castles:843700,icon:'balancingact'});
	new Molpy.Boost({name:'Ch*rpies',desc:'Increases sand dig rate by 5% per badge earned',
		sand:6969696969,castles:81818181,icon:'chirpies'});
	new Molpy.Boost({name:'Buccaneer',desc:'Clicks and buckets give double sand',
		sand:84700000,castles:7540,icon:'buccaneer'});
	new Molpy.Boost({name:'Bucket Brigade',desc:'Clicks give 1% of sand dig rate per 50 buckets',
		sand:412000000,castles:8001,icon:'bucketbrigade'});
	new Molpy.Boost({name:'Bag Puns',desc:'Doubles Sand rate of Bags. Clicks give 40% more sand for every 5 bags above 25',sand:1470000000,castles:450021,stats:function(me)
		{
			if(me.power <= 20) return 'Speed is at '+me.power+'out of 20';
		}});
	{//#region puns	
		Molpy.bp = [
			"One True Comic II: The Baginning"
			,"One True Comic 2: Electric Bagaloo"
			,"2 Bags 2 Curious"
			,"The Re-Adventures of Bagsitting"
			,"Conan the Bagbarian 2"
			,"Bag to the Future"
			,"Bag Runner 2: The Last Replicant"
			,"Bag Wars - Episode V - The Sandcastle Strikes Back"
			,"A Tale of Two Bags"
			,"Cueball: The Guy Who Bagged Me"
			,"Harry Potter and the Chamber of Bags"
			,"Bagman: The Dark Watery Stuff Rises"
			,"The Passion of the Bags"
			,"The Good The Bag And The Ugly"
			,"B For Bagdetta"
			,"Theater Of Bags"
			,"Bag Of Blood"
			,"The Day The Bag Stood Still "
			,"Bag Wars Episode IV - A New Loop"
			,"The Big Bag Theory"
			,"American Baggy"
			,"Cue and Meg's Excellent Bagventure"
			,"The Bagfather: Part II"
			,"The Hunt for Bag October"
			,"Bag Storm Rising"
			,"Clear and Present Bags"
			,"The Temporal Strikes Bag"
			,"The Bagmaker"
			,"The Pelican Bag"
			,"The Gingerbag Man"
			,"Runaway Bag"
			,"Transbaggers"
			,"Bagformers"
			,"The Hunger Bags"
			,"Rucksack at Tiffany's"
			,"Bagglestar Galactica"
			,"Cool Bag Loop"
			,"Groundbag Day"
			,"Bag2: Hyperbag"
			,"Bagger's Game"
			,"Bagger's Shadow"
			,"Speaker for the Bag"
			,"Bagocide"
			,"Shadow of the Bagemon"
			,"The Lord of the Bags 1: The Fellowship of the Bags"
			,"The Lord of the Bags 2: The Two Sandcastles"
			,"The Lord of the Bags 3: The Return of La Petite"
			,"Requiem for a Bag"
			,"The Bag Before Time"
			,"Baggie Nights"
			,"Bagnolia"
			,"Punch-Drunk Bags"
			,"There Will Be Bags"
			,"The Bagloliers"
			,"Children of the Bag"
			,"Bagcatcher"
			,"Bagstarter"
			,"The Green Bag"
			,"The Running Bag"
			,"Bag By Me"
			,"Firebag"
			,"Buffy The Bag Slayer"
			,"Citizen Bag"
			,"Seven Bagurai"
			,"Bag Ocean 3: Until the End of Time"
			,"No Castle for Old Bags"
			,"Casabaga"
			,"Lawrence of Bagrabia"
			,"Bagard of Oz"
			,"The Andromeda Bag"
			,"The Terminal Bag"
			,"Eaters of the Bag"
			,"The Great Bag Robbery"
			,"Rising Bag"
			,"The Lost Bag"
			,"Bagframe"
			,"State of Bag"
			,"Drop That Strangebag, or: How I Learned to Stop Worrying and Love the Loop"
			,"Jurassic Bag"
			,"Bag Trek Into Darkness"
			,"The Bagtrix Reloaded"
			,"Bag Window"
			,"The Thomas Crown Bag"
			,"3 Bags Of The Condor"
			,"A Good Day to Bag Hard"
			,"Bag to the Beach"
			,"The Hitchhiker's Guide to Baggage"
			,"The Bag at the End of the Universe"
			,"Bags, the Universe and Everything"
			,"So Long and Thanks for All the Bags"
			,"Mostly Bagless"
			,"And Another Bag"
			,"Beauty and the Bag"
			,"Bagspotting"
			,"Three bags and a baby"
			,"Bag Life!"
			,"Rosencrantz & Guildenstern are Bags"
			,"Men in Bag"
			,"Secrets of the Bag-Bag Sisterhood"
			,"Fried Bag Tomatoes"
			,"Bag Beauty"
			,"Singing in the Bag"
			,"Fiddler in the Bag"
			,"Return to Bag Mountain"
			,"Bags Bunny"
			,"Brokebag Mountain: Two in the Bag"
			,"Breaking Bag"
			,"It's a Bag, Bag, Bag, Bag World"
			,"B*A*G*S"
			,"Bag Trouble in Little China"
			,"'<i>The Papal Pun- <b>A Bagwork Orange</b></i>'"
			,"Bag Story"
			,"A Bag's Life"
			,"Bagsters, Inc."
			,"Bagging Nemo"
			,"BAGG∙E"
			,"Bagatouille"
			,"The Inbagibles"
			,"The Incredibags"
			,"Cabin in the Bag"
			,"Bagalon 5"
			,"The Bag Lebowski"
			,"Silence of the Bags"
			,"Starbag SB-1"
			,"Starbag Atlantis"
			,"Starbag Universe"
			,"Tron Bagacy"
			,"The Last Bagfighter"
			,"Bagaxy Quest"
			,"The Italian Bag"
			,"Half-Bag 3 Confirmed!"
			,"The Big Bag Wolpy"
			,"The Bag of Music"
			,"Iron Bag"
			,"Baglander"
			,"The Molpy, the Bag, and the Castle"
			,"Treasures of the Bag"
			,"Romeo and Bagguette"
			,"Bags for Dummies"
			,"Tomb Bagger"
			,"Raiders of the Lost Bag"
			,"Bagnado"
			,"Bag vs. Predator"
			,"Bagception"
			,"Baginator"
		]
	}
	
	new Molpy.Boost({name:'The Forty',desc:'Cuegan produce 40 times as much sand',sand:40404040,castles:4040,icon:'theforty'});
	new Molpy.Boost({name:'Chequered Flag',desc:'Racing NewPixBots activate 10% sooner',sand:101010101,castles:10101});
	new Molpy.Boost({name:'Skull and Crossbones',desc:'Pirates vs. Ninjas! Ninja Builder\'s Castle output is increased by 5% per flag owned over 40',sand:304050607,castles:809010,group:'ninj'});
	new Molpy.Boost({name:'No Sell',desc:
		function(me)
		{
			return '<input type="Button" onclick="Molpy.NoSellToggle()" value="'+(me.power? 'Show':'Hide')+'"></input> the Sell links on tools.';
		},sand:3333,castles:55,className:'toggle'});
	
	Molpy.NoSellToggle=function()
	{
		var me=Molpy.Boosts['No Sell'];
		if(!me.bought)me.buy();
		if(!me.bought)
		{
			Molpy.Notify('Looks like you need to sell something');
			return;
		}
		me.power = (!me.power)*1;
		Molpy.shopRepaint=1;
	}
		
	new Molpy.Boost({name:'Blixtnedslag Förmögenhet, JA!',desc:'Not Lucky gets a 20% bonus (non-cumulative) per level of Blixtnedslag Kattungar, JA!',sand:111098645321,castles:7777777777,
		stats:function()
		{
			return 'Adds ' + Molpify(20*Molpy.Boosts['Blixtnedslag Kattungar, JA!'].power,1)+'% to Not Lucky reward';
		},icon:'bfj',hardlocked:1});
	new Molpy.Boost({name:'VITSSÅGEN, JA!',desc:'Stop the Puns!',sand:334455667788,castles:999222111000,
		stats:function(me)
		{
			if(me.power <= 100) return 'Speed is at '+me.power+'out of 100';
		}});
	new Molpy.Boost({name:'Swedish Chef',desc:
		function(me)
		{
			if(!me.bought)
				return 'Björk Björk Björk!';
			if(!me.power)
				return 'Björk Björk Björk! Well that was a waste...';
			return 'Björk Björk Björk! You\'re welcöme';
		},sand:999222111000,castles:8887766554433,
		stats:function(me)
		{
			if(!me.power)
			{
				me.power=1;
				Molpy.Build(8887766554433);
			}
			Molpy.UnlockBoost(['Family Discount','Shopping Assistant','Late Closing Hours']);
			return 'Gives you Swedish stuff';
		}});
	new Molpy.Boost({name:'Family Discount',desc:'Permament 80% discount on all prices',sand:24000000000,castles:720000000000,
		buyFunction:function(){Molpy.shopRepaint=1;}}
	);
	Molpy.shoppingItem='';
	new Molpy.Boost({name:'Shopping Assistant',desc:
		function(me)
		{
			if(!me.bought)
				return 'We do your shopping for you! For a small fee...';
			if(!Molpy.shoppingItem)
				return '<input type="Button" value="Choose" onclick="Molpy.ChooseShoppingItem()"></input> an item to automatically buy whenever possible';
			return 'Buys '+Molpy.shoppingItem+' whenever possible, taking a 5% handling fee. You may <input type="Button" value="Choose" onclick="Molpy.ChooseShoppingItem()"></input> a different item (or none) at any time.';
		},sand:18000000000,castles:650000000000,className:'action'});
	Molpy.ChooseShoppingItem=function()
	{
		var name = prompt('Enter the name of the tool or boost you wish to buy.\nNames are case sensitive.\nLeave blank to disable.\nYour choice is not preserved if you reload.',Molpy.shoppingItem||'Bag');
		if(name)
		{
			var item=Molpy.SandTools[name] || Molpy.CastleTools[name];
			if(item)
			{
				Molpy.shoppingItem=name;
				Molpy.Notify(item.plural + ' will be purchased whenever possible',1);
				return;
			}
			var item = Molpy.Boosts[name];
			if(item && !item.bought)
			{
				Molpy.shoppingItem=name;
				Molpy.Notify(name + ' will be purchased when possible',1);
				return;
			}
		}
		Molpy.shoppingItem='';
		Molpy.Notify('No item selected for shopping assistant',1);
	}
	new Molpy.Boost({name:'Late Closing Hours',desc:Molpy.IKEA+' is available for 6 mNP longer',sand:47000000000,castles:930000000000});
	new Molpy.Boost({name:'Throw Your Toys',desc:'Trebuchets build a castle for every flag and bucket owned',sand:546000000,castles: 230000});
	new Molpy.Boost({name:'Broken Rung',desc:'Multiplies the Sand output of Ladders by the amount of the tool you have least of.',sand:1769000000,castles: 450000});
	
	new Molpy.Boost({name:'Temporal Rift',
		desc:function(me)
		{
			if(me.bought)return 'A hole in Time has opened. You can not determine where it leads, but it will close in '+me.countdown+'mNP.<br/><input type="Button" value="JUMP!" onclick="Molpy.RiftJump()"></input>';
			return 'A hole in time has opened.';
		},startCountdown:6,hardlocked:1,group:'chron',className:'action'});
	Molpy.RiftJump=function()
	{
		if(Math.random()*6<5)
		{
			Molpy.totalCastlesDown+=Molpy.castles;
			Molpy.castlesBuilt-=Molpy.castles;
			Molpy.Destroy(Molpy.castles);
			Molpy.sand*=2;
		}
		Molpy.newpixNumber=Math.round(Math.random()*Molpy.highestNPvisited);
		Molpy.ONG();
		Molpy.LockBoost('Temporal Rift');
		Molpy.Notify('You wonder when you are');
	}
	
	Molpy.groupNames={boosts:'boost',hpt:'hill people tech',ninj:'ninjutsu',chron:'chronotech',cyb:'cybernetics'};
}
	
	
Molpy.DefineBadges=function()
{	
	new Molpy.Badge('Amazon Patent','1-Click');
	new Molpy.Badge('Oops','You clicked it again');
	new Molpy.Badge('Just Starting','10 clicks');
	new Molpy.Badge('Busy Clicking','100 clicks');
	new Molpy.Badge('Click Storm','1,000 clicks');
	new Molpy.Badge('Getting Sick of Clicking','Dig 100,000 sand by clicking');
	new Molpy.Badge('Why am I still clicking?','Dig 5,000,000 sand by clicking');
	new Molpy.Badge('Click Master','Dig 100,000,000 sand by clicking',2);
	
	new Molpy.Badge('Rook','Make a castle');
	new Molpy.Badge('Enough for Chess','Make 4 castles');
	new Molpy.Badge('Fortified','Make 40 castles');
	new Molpy.Badge('All Along the Watchtower','Make 320 castles');
	new Molpy.Badge('Megopolis','Make 1,000 castles');
	new Molpy.Badge('Kingdom','Make 100,000 castles');
	new Molpy.Badge('Empire','Make 10,000,000 castles');
	new Molpy.Badge('Reign of Terror','Make 1,000,000,000 castles',2);
	
	new Molpy.Badge('We Need a Bigger Beach','Have 1,000 castles');
	new Molpy.Badge('Castle Nation','Have 1,000,000 castles');
	new Molpy.Badge('Castle Planet','Have 1,000,000,000 castles');
	new Molpy.Badge('Castle Star','Have 1,000,000,000,000 castles');
	new Molpy.Badge('Castle Galaxy','Have 8,888,000,000,000,000 castles',1);
	
	new Molpy.Badge('Barn','Have 50 sand');
	new Molpy.Badge('Storehouse','Have 200 sand');
	new Molpy.Badge('Bigger Barn','Have 500 sand');
	new Molpy.Badge('Warehouse','Have 8,000 sand');
	new Molpy.Badge('Glass Factory','Have 300,000 sand');
	new Molpy.Badge('Silicon Valley','Have 7,000,000 sand');
	new Molpy.Badge('Seaish Sands','Have 420,000,000 sand',1);
	new Molpy.Badge('You can do what you want','Have 123,456,789 sand',2);
	
	new Molpy.Badge('Ninja', 'Ninja a NewPixBot');
	new Molpy.Badge('No Ninja', 'Click for sand after not ninjaing NewPixBot');
	new Molpy.Badge('Ninja Stealth', 'Make non-ninjaing clicks 6 newpix in a row');
	new Molpy.Badge('Ninja Dedication', 'Reach ninja stealth streak 16');
	new Molpy.Badge('Ninja Madness', 'Reach ninja stealth streak 26');
	new Molpy.Badge('Ninja Omnipresence', 'Reach ninja stealth streak 36');
	new Molpy.Badge('Ninja Strike', 'Ninja 10 NewPixBots simultaneously');
	new Molpy.Badge('Ninja Holidip', 'Lose ninja stealth by not clicking');
	
	new Molpy.Badge('Wipeout', 'Destroy a total of 500 castles with waves');
	new Molpy.Badge('Redundant Redundancy', 'Earn 0 badges',1);
	new Molpy.Badge('Redundant', 'Earn at least 1 badge',1);
	new Molpy.Badge('Clerical Error', 'Receive a badge you haven\'t earned',1);
	new Molpy.Badge('Castle Price Rollback', 'Experience an ONG');
	new Molpy.Badge('This Should be Automatic', 'Manually save 20 times');
	
	new Molpy.Badge('A light dusting', 'Have a sand dig rate of 0.1 SpmNP');
	new Molpy.Badge('Sprinkle', 'Have a sand dig rate of 0.8 SpmNP');
	new Molpy.Badge('Trickle', 'Have a sand dig rate of 6 SpmNP');
	new Molpy.Badge('Pouring it on', 'Have a sand dig rate of 25 SpmNP');
	new Molpy.Badge('Hundred Year Storm', 'Have a sand dig rate of 100 SpmNP');
	new Molpy.Badge('Thundering Typhoon!', 'Have a sand dig rate of 400 SpmNP');
	new Molpy.Badge('Sandblaster', 'Have a sand dig rate of 1,600 SpmNP');
	new Molpy.Badge('Where is all this coming from?', 'Have a sand dig rate of 7,500 SpmNP');
	new Molpy.Badge('Seaish Sandstorm', 'Have a sand dig rate of 30,000 SpmNP',1);
	new Molpy.Badge('WHOOSH', 'Have a sand dig rate of 500,500 SpmNP',1);
	new Molpy.Badge('We want some two!', 'Have a sand dig rate of 2,222,222 SpmNP',1);
	new Molpy.Badge('Bittorrent', 'Have a sand dig rate of 10,101,010 SpmNP',1);
	new Molpy.Badge('WARP SPEEEED', 'Have a sand dig rate of 299,792,458 SpmNP',1);
	new Molpy.Badge('Maxed out the display', 'Have a sand dig rate of 8,888,888,888.8 SpmNP',2);
	
	new Molpy.Badge('Store ALL of the sand','Have 782,222,222,144 sand',2);		
	
	new Molpy.Badge('Notified','Receive a notification');
	new Molpy.Badge('Thousands of Them!','Receive 2000 notifications',1);
	new Molpy.Badge('Decisions, Decisions','With an option on additional decisions',1);
	new Molpy.Badge('Night and Dip','Change Colour Schemes',1);
	new Molpy.Badge('Far End of the Bell Curve','View Stats',1);
	new Molpy.Badge('The Fine Print','View the stats of a Sand Tool',1);
	new Molpy.Badge('Keeping Track','View the stats of a Castle Tool',1);
	
	new Molpy.Badge('Ninja Shortcomings','Lose a Ninja Stealth Streak of between 30 and 35');
	new Molpy.Badge('Not Ground Zero','Molpy Down',1);
	new Molpy.Badge('Not So '+Molpy.redactedW,'Click 2 '+Molpy.redactedWords,1);
	new Molpy.Badge("Don't Litter!",'Click 14 '+Molpy.redactedWords,1);
	new Molpy.Badge('Y U NO BELIEVE ME?','Click 101 '+Molpy.redactedWords,1);
	new Molpy.Badge("Have you noticed it's slower?",'Experience the LongPix');
	new Molpy.Badge("Judgement Dip Warning",
		function()
		{
			var report=Molpy.JudgementDipReport();
			if(Molpy.Boosts['NewPixBot Navigation Code'].power) return 'The Bots have been foiled by altered navigation code';
			var level = report[0];
			var countdown = report[1];
			if(!level) return 'Safe. For now.';
			if(level==1) return 'The countdown is at ' + Molpify(countdown)+'NP';
			return 'Judgement dip is upon us! But it can get worse. The countdown is at ' + Molpify(countdown)+
			'NP';
		},2,'judgementdipwarning');
	Molpy.JudgementDipThreshhold=function()
	{
		if(Molpy.Boosts['NewPixBot Navigation Code'].power) return [0,Infinity];
		var baseVal= 500000000;
		var div = 1+ Molpy.Got('Factory Automation')+Molpy.Got('Blast Furnace')+Molpy.Got('Time Travel')
			+Molpy.Got('Flux Capacitor')+Molpy.Got('Flux Turbine')+Molpy.Got('Recursivebot')+Molpy.Got('Robot Efficiency')
			+Molpy.Got('Ninja Assistants')+Molpy.Got('Minigun')+Molpy.Got('Stacked')+Molpy.Got('Big Splash')+Molpy.Got('Irregular Rivers');
		if(Molpy.Got('Bag Burning'))
		{
			div/=Math.pow(1.4,Math.max(0,(Molpy.SandTools['Bag'].amount-Molpy.npbDoubleThreshhold)/2));
		}
		return baseVal/div;
	}
	Molpy.JudgementDipReport=function()
	{
		var bot=Molpy.CastleTools['NewPixBot'];
		var bots = bot.amount;
		if(Molpy.Got('Time Travel')||Molpy.newpixNumber<20)bots-=2;
		var botCastles=bot.totalCastlesBuilt*bots;
		var thresh = Molpy.JudgementDipThreshhold();
		var level = Math.max(0,Math.floor(botCastles/thresh));
		var countdown = ((level+1)*thresh - botCastles);
		countdown/=(bot.buildN()*bot.amount*bot.amount);
		if(Molpy.Got('Doublepost'))countdown/=2;
		countdown/=Molpy.globalCastleMult; //this is a bit approximate because of its rounding, but close enough for this, hopefully
		if(Molpy.Boosts['Coma Molpy Style'].power)
		{
			level=Math.floor(level/2);
		}
		
		if(level>3)
		{
			if(Molpy.Got('Time Travel') && 
				!(Molpy.Got('Overcompensating')||Molpy.Got('Doublepost')))
			{
				Molpy.UnlockBoost('Novikov Self-Consistency Principle');
			}
			if(Molpy.SandTools['Bag'].amount>Molpy.npbDoubleThreshhold)
			{
				Molpy.UnlockBoost('Bag Burning');
			}
		}
		if(level>4)
		{
			Molpy.Boosts['Ninja Assistants'].hardlocked=0;
		}
		if(level>5)
		{
			Molpy.Boosts['Minigun'].hardlocked=0;
		}
		if(level>6)
		{
				Molpy.Boosts['Stacked'].hardlocked=0;
		}
		if(level>7)
		{
			if(Molpy.Got('Minigun'))
				Molpy.Boosts['Big Splash'].hardlocked=0;
		}
		if(level>8)
		{
			if(Molpy.Got('Stacked'))
				Molpy.Boosts['Irregular Rivers'].hardlocked=0;
		}
		if(level>12)
		{
			if(Molpy.Got('Big Splash'))
				Molpy.Boosts['NewPixBot Navigation Code'].hardlocked=0;
		}
		if(level>30)
		{
			if(Molpy.Got('Flux Turbine'))
			{
				Molpy.Boosts['NewPixBot Navigation Code'].hardlocked=0;
				Molpy.Boosts['NewPixBot Navigation Code'].sandPrice=33000;
				Molpy.Boosts['NewPixBot Navigation Code'].castlePrice=7400;
			}
		}
		return [level,Math.ceil(countdown)];
	}
	new Molpy.Badge("Judgement Dip",
		function()
		{
			if(Molpy.Boosts['NewPixBot Navigation Code'].power) return 'The Bots have been foiled by altered navigation code';
			var j=Molpy.judgeLevel-1;
			if(j<1) return 'Safe. For now.';
			return 'The NewPixBots destroy ' + Molpify(j) + ' Castle'+(j==1?'':'s')+' each per mNP';			
		}
		,3,'judgementdip');
	Molpy.Badges['Judgement Dip Warning'].className='alert';
	Molpy.Badges['Judgement Dip'].className='alert';
	new Molpy.Badge('Fast Forward','Travel Back to the Future',1);
	new Molpy.Badge('And Back','Return to the Past',1);
	new Molpy.Badge('Primer','Travel through Time 10 Times',1);
	new Molpy.Badge('Wimey','Travel through Time 40 Times',1);
	new Molpy.Badge('Hot Tub','Travel through Time 160 Times',1);
	new Molpy.Badge("Dude, Where's my DeLorean?",'Travel through Time 640 Times',2);
	new Molpy.Badge('Use Your Leopard','Get a click by using your leopard to simulate reloading the page');
	new Molpy.Badge('Badge Not Found','Description Not Found');
	new Molpy.Badge('Fractals Forever','Reach Fractal Level 60, and Fractal Sandcastles will be retained if you Molpy Down.');
	new Molpy.Badge('Recursion',
		function(){return 'Yo Dawg, we heard you earned '+Molpify(50000000000,0,!Molpy.showStats)+' Sand by clicking...';});
	new Molpy.Badge('Big Spender',
		function(){return 'Spend '+Molpify(200000000,0,!Molpy.showStats)+' Castles total';});
	new Molpy.Badge('Valued Customer',
		function(){return 'Spend '+Molpify(80000000000,0,!Molpy.showStats)+' Castles total';});
	new Molpy.Badge('Beachscaper','Have 200 Sand Tools');
	new Molpy.Badge('Beachmover','Have 100 Castle Tools');
	new Molpy.Badge('Better This Way','Purchase 50 Boosts');
	new Molpy.Badge('Recursion ','To Earn Recursion, you must first earn Recursion');
	new Molpy.Badge('Beachomancer','Have 1000 Sand Tools');
	new Molpy.Badge('Beachineer','Have 500 Castle Tools');
}
		
Molpy.CheckBuyUnlocks=function()
{
	var me=Molpy.SandTools['Bucket'];
	if(me.amount>=1)Molpy.UnlockBoost('Bigger Buckets');
	if(me.amount>=4)Molpy.UnlockBoost('Huge Buckets');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Carrybot');
	if(me.amount>=30)Molpy.UnlockBoost('Buccaneer');
	if(me.amount>=50)Molpy.UnlockBoost('Bucket Brigade');
	
	me=Molpy.SandTools['Cuegan'];
	if(me.amount>=1)Molpy.UnlockBoost('Helping Hand');
	if(me.amount>=4)Molpy.UnlockBoost('Cooperation');
	if(me.amount>=8)Molpy.UnlockBoost('Megball');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Stickbot');
	if(me.amount>=40)Molpy.UnlockBoost('The Forty');
	
	me=Molpy.SandTools['Flag'];
	if(me.amount>=1)Molpy.UnlockBoost('Flag Bearer');
	if(me.amount>=2)Molpy.UnlockBoost('War Banner');
	if(me.amount>=6)Molpy.UnlockBoost('Magic Mountain');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Standardbot');
	if(me.amount>=25)Molpy.UnlockBoost('Chequered Flag');
	if(me.amount>=40)Molpy.UnlockBoost('Skull and Crossbones');
	
	me=Molpy.SandTools['Ladder'];
	if(me.amount>=1)Molpy.UnlockBoost('Extension Ladder');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Climbbot');
	if(me.amount>=25)Molpy.UnlockBoost('Broken Rung');
	
	me=Molpy.CastleTools['NewPixBot'];
	if(me.amount>=3)Molpy.UnlockBoost('Busy Bot');
	if(me.amount>=8)Molpy.UnlockBoost('Robot Efficiency');
	if(me.amount>=Molpy.npbDoubleThreshhold&&Molpy.Got('Robot Efficiency'))Molpy.UnlockBoost('Recursivebot');
	if(me.amount>=17)Molpy.UnlockBoost('HAL-0-Kitty');
	if(me.amount>=22 && Molpy.Got('Department of Redundancy Department'))Molpy.UnlockBoost('Factory Automation');
	if(Molpy.Got('Factory Automation'))
	{
		Molpy.Boosts['Blast Furnace'].hardlocked=0;
	}
	 
	me=Molpy.CastleTools['Trebuchet'];
	if(me.amount>=1)Molpy.UnlockBoost('Spring Fling');
	if(me.amount>=2)Molpy.UnlockBoost('Trebuchet Pong');				
	if(me.amount>=5)Molpy.UnlockBoost('Varied Ammo');	
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Flingbot');				
	if(me.amount>=20)Molpy.UnlockBoost('Throw Your Toys');	
	
	me=Molpy.CastleTools['Scaffold'];
	if(me.amount>=2)Molpy.UnlockBoost('Precise Placement');
	if(me.amount>=4)Molpy.UnlockBoost('Level Up!');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Propbot');
	if(me.amount>=20)Molpy.UnlockBoost('Balancing Act');
	
	me=Molpy.CastleTools['Wave'];
	if(me.amount>=2)Molpy.UnlockBoost('Swell');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Surfbot');
	
	me=Molpy.SandTools['Bag'];
	if(me.amount>=2)Molpy.UnlockBoost('Embaggening');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Luggagebot');
	if(me.amount>=30)Molpy.UnlockBoost('Bag Puns');
	var you=me;
	me = Molpy.CastleTools['River'];
	if(me.amount&&you.amount)Molpy.UnlockBoost('Sandbag');
	if(me.amount>=Molpy.npbDoubleThreshhold)Molpy.UnlockBoost('Smallbot');
	
	if(Molpy.Earned('Fractals Forever')&& !Molpy.Got('Fractal Sandcastles'))
	{
		Molpy.UnlockBoost('Fractal Sandcastles');	
		Molpy.Boosts['Fractal Sandcastles'].power=0;	
		Molpy.Boosts['Fractal Sandcastles'].bought=1; //woo freebie!
		Molpy.boostRepaint=1;
		Molpy.recalculateDig=1;
		Molpy.BoostsOwned++;
	}	
	
	Molpy.Boosts[Molpy.IKEA].startPower=0.4;
	if(Molpy.castlesSpent>200000000)
	{
		Molpy.EarnBadge('Big Spender');
		Molpy.Boosts[Molpy.IKEA].startPower=0.5;
	}
	if(Molpy.castlesSpent>80000000000)
	{
		Molpy.EarnBadge('Valued Customer');
		Molpy.Boosts[Molpy.IKEA].startPower=0.6;
	}
	Molpy.Boosts[Molpy.IKEA].startCountdown=4;
	if(Molpy.Got('Late Closing Hours'))
	{
		Molpy.Boosts[Molpy.IKEA].startCountdown=10;
	}
	
	if(Molpy.BadgesOwned>=69)
	{
		Molpy.UnlockBoost('Ch*rpies');
	}
	
	if(Molpy.SandToolsOwned>=200)Molpy.EarnBadge('Beachscaper');
	if(Molpy.CastleToolsOwned>=100)Molpy.EarnBadge('Beachmover');
	if(Molpy.SandToolsOwned>=1000)Molpy.EarnBadge('Beachomancer');
	if(Molpy.CastleToolsOwned>=500)Molpy.EarnBadge('Beachineer');
	if(Molpy.BoostsOwned>=50)Molpy.EarnBadge('Better This Way');
}

Molpy.CheckClickAchievements=function()
{
	var c = Molpy.beachClicks;
	Molpy.EarnBadge('Amazon Patent');
	if(c>=2){
		Molpy.EarnBadge('Oops');
	}
	if(c>=10){
		Molpy.EarnBadge('Just Starting');
	}
	if(c>=100){
		Molpy.EarnBadge('Busy Clicking');
		Molpy.UnlockBoost('Helpful Hands');
	}
	if(c>=1000){
		Molpy.EarnBadge('Click Storm');
		Molpy.UnlockBoost('Raise the Flag');
	}
	if(c>=3333){
		Molpy.UnlockBoost('True Colours');
	}
	c = Molpy.sandManual;
	if(c>=100000){
		Molpy.EarnBadge('Getting Sick of Clicking');
	}
	if(c>=5000000){
		Molpy.EarnBadge('Why am I still clicking?');
	}
	if(c>=100000000){
		Molpy.EarnBadge('Click Master');
	}
	if(c>=50000000000){
		Molpy.EarnBadge('Recursion');
		Molpy.EarnBadge('Recursion ');
		Molpy.UnlockBoost('Fractal Sandcastles');
	}						
}	
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*  via stackoverflow :D
*
**/
var AllYourBase = {

// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
SetUpUsTheBomb : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = AllYourBase._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
BelongToUs : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = AllYourBase._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
}

}
