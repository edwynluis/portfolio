/*

- Games
== Zombie Escape
== Vision
== Billy
== Lumy Naissance

- Education
== Desafio
== UCC

- AI
== A*
== Flocking
== Genetic

- General
Shading
Geracao de imagens
fisica; cinematica e fluido

Modelisacao: objetos
Modelisacao: malhas
Modelisacao: superficies
Modelisacao: volume
Modelisacao: simplificacao/subdivisao; geracao de terreno e rotas

*/

$scope.categories = [
	{
		title : "Games",
		items : [
			{
				title 			: "Zombie Escape",
				short_desc		: "Survive! That is your only objective.<br>Kill zombies and help your friends in this multiplayer game.",
				full_desc 		: "In this multiplayer game, the players are lost in a sewer system full of zombies. They must collect items with the aim of surviving.<br>A game developed during a 2 weeks course, as a means to introduce the interaction between Programmers and Game Designers.",
				keypoints 		: ["Multiplayer management", "Screen split", "InGame UI", "Items management", "Integration with Game Designers"],
				tools	 		: ["Unity"],
				context			: "3 Programmers; 3 Game Designers",
				repository		: "https://github.com/galliotgreg/Zombi-Escape.git",
				play			: undefined,
				preview_image 	: { img : "../assets/img/projects/", alt : "" },// todo
				images 			: [
									{ img : "../assets/img/projects/", alt : "" }// todo video
								],
				videos			: [
									{ img : "", link : "", alt : "" }// todo
								]
			},
			{
				title 			: "Computer Vision",
				short_desc		: "A short demonstration of Computer vision in games.<br>Mouth and marker detection.",
				full_desc 		: "A short demonstration of Computer vision in games.<br>In this game, the player can beat the monster by freezing him (Mouth opening) and hitting him (Marker detection). The webcamera image is used as source to a Neural Network that detects the face; Image processing is used to extract elements that  trigger actions in the game.",
				keypoints 		: ["Mouth Opening/Closing detection", "Face detection", "Marker detection", "Image processing"],
				tools	 		: ["Unity","OpenCV (EmguCV)"],
				context			: "3 Programmers",
				repository		: "https://github.com/GeboWunjo/OpenCV.git",
				play			: undefined,
				preview_image 	: { img : "../assets/img/projects/", alt : "" },//todo
				images 			: [
									{ img : "../assets/img/projects/", alt : "" }//todo video
								],
				videos			: [
									{ img : "", link : "", alt : "" }//todo
								]
			},
			{
				title 			: "Billy and his friends",
				short_desc		: "A game proposing an asymmetric gameplay. A \"blind\" player controls the terrain in order to help others.",
				full_desc 		: "\"Billy and his friends\" is a multiplayer game that proposes an asymmetric gameplay. The regular players must solve a puzzle while a \"blind\" player trigger some action (e.g. tilting the terrain).<br>This is a demostration used to validate the idea of the proposed game. As the game would use several [small] levels, a level creation tool was designed to parse a text file and generate the objects in game.",
				keypoints 		: ["Asymmetric gameplay","Levels described by text files","Idea validation"],
				tools	 		: ["Unity"],
				context			: "1 Programmer; 5 Game Designers",
				repository		: "https://github.com/Edwyn-Gamagora2017/billy.git",
				play			: "https://edwynbatista.herokuapp.com/billy",
				preview_image 	: { img : "../assets/img/projects/", alt : "" },//todo
				images 			: [
									{ img : "../assets/img/projects/", alt : "" }//todo
								],
				videos			: [
									{ img : "", link : "", alt : "" }//todo
								]
			},
			{
				title 			: "Lumy Naissance",
				short_desc		: "Create the behavior of your units and destroy the enemy.<br>A game to introduce programming concepts.",
				full_desc 		: "In the \"Lumy Naissance\", the player controls its own specie and manipulates its evolution tree. The player defines the behavior for each cast of this tree. Then, the units will execute these behaviors ingame in order to beat the enemy. The manipulation of units' behaviors is performed via an editor that presents them as decisions trees. So, the player will face several programming-like concepts, as a means to get started in this domain.<br>The \"Lumy Naissance\" is the game proposed for a 3 months project, as part of the Master 2. During this period, the students simulate a real studio environment, including the interaction with game/graphic/sound designers. This game will be presented at the Gamagora Game Show.",
				keypoints 		: ["Serious Game","Multiplayer","Multidisciplinary team","Large project code management"],
				tools	 		: ["Unity"],
				context			: "5 Programmers; 10 Game Designers; 1 Graphic Designer; 1 Music/Sound Effects Composer",
				repository		: "https://github.com/galliotgreg/Lumy_Naissance.git",
				play			: undefined,
				preview_image 	: { img : "../assets/img/projects/", alt : "" },//todo
				images 			: [
									{ img : "../assets/img/projects/", alt : "" }//todo facebook
								],
				videos			: [
									{ img : "", link : "", alt : "" }//todo
								]
			}
		]
	},
	{
		title : "Education",
		items : [
		]
	},
	{
		title : "Artificial Intelligence",
		items : [
			{
				title 			: "A star / Dijkstra",
				short_desc		: "",
				full_desc 		: "",
				keypoints 		: "",
				tools	 		: "",
				repository		: "https://github.com/Edwyn-Gamagora2017",
				play			: undefined,
				preview_image 	: { img : "../assets/img/projects/astar_sample.png", alt : "Astar" },
				images 			: [
									{ img : "../assets/img/projects/astar_sample.png", alt : "Astar" }
								],
				videos			: [
									{ img : "../assets/img/projects/astar_sample.png", link : "https://github.com/Edwyn-Gamagora2017", alt : "Astar" }
								]
			}
		]
	},
	{
		title : "General",
		items : [
		]
	}
];

/*
{
	title : "",
	items : [
	]
},
{
	title 			: "",
	short_desc		: "",
	full_desc 		: "",
	keypoints 		: [""],
	tools	 		: [""],
	context			: "",
	repository		: undefined,
	play			: undefined,
	preview_image 	: { img : "../assets/img/projects/", alt : "" },
	images 			: [
						{ img : "../assets/img/projects/", alt : "" }
					],
	videos			: [
						{ img : "", link : "", alt : "" }
					]
}
*/