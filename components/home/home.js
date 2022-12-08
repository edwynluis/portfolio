angular.module('components', ['ngSanitize'])

.directive('home', function() {
	return {
	  restrict: 'E',
	  scope: {},
	  templateUrl: "components/home/home.html",
	  replace: true,
	  controller: function($scope, $element) {	  	
		$scope.selectedCategorie = -1;
		$scope.selectedItem = -1;

		$scope.selectItem = function( categorie, item ){
			$scope.selectedCategorie = categorie;
			$scope.selectedItem = item;

			angular.element('#carousel_categorie_'+categorie).carousel();
			/*for (var i = 0; i < $scope.categories.length; i++) {
				angular.element('#carousel_categorie_'+$scope.categories[i].index).carousel(0);
			};*/
		};

		$scope.isSelected = function( categorie, item ){
			return $scope.selectedCategorie == categorie && $scope.selectedItem == item;
		};

		$scope.isSelectedCategorie = function( categorie ){
			return $scope.selectedCategorie == categorie;
		};

		$scope.categories = [
			{
				title : "Games",
				index : 0,
				items : [
					{
						title 			: "Lumy Naissance",
						short_desc		: "Create the behavior of your units and destroy the enemy.<br>A game to introduce programming concepts.",
						full_desc 		: "In the \"Lumy Naissance\", the player controls its own specie and manipulates its evolution tree. The player defines the behavior for each cast of this tree. Then, the units will execute these behaviors ingame in order to beat the enemy. The manipulation of units' behaviors is performed via an editor that presents them as decisions trees. So, the player will face several programming-like concepts, as a means to get started in this domain.<br>The \"Lumy Naissance\" is the game proposed for a 3 months project, as part of the Master 2. During this period, the students simulate a real studio environment, including the interaction with game/graphic/sound designers. This game was be presented at the Gamagora Game Show.",
						keypoints 		: ["Serious Game","Multiplayer","Multidisciplinary team","Large project code management"],
						tools	 		: ["Unity"],
						context			: ["5 Programmers","10 Game Designers","1 Graphic Designer","1 Music/Sound Effects Composer"],
						repository		: "https://github.com/galliotgreg/Lumy_Naissance.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/games/lumy/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/games/lumy/1.png", alt : "Lumy Naissance" },
											{ img : "../docs/assets/img/projects/games/lumy/1.gif", alt : "Game" },
											{ img : "../docs/assets/img/projects/games/lumy/2.gif", alt : "Editing Behavior" },
											{ img : "../docs/assets/img/projects/games/lumy/4.png", alt : "Editing Unit" }
										],
						videos			: [
											{ img : "../docs/assets/img/video.png", link : "https://www.youtube.com/watch?v=B5Lxy5LWQiA", alt : "Teaser Lumy Naissance" },
											{ img : "../docs/assets/img/facebook.png", link : "https://www.facebook.com/Lumy-Naissance-1658638194215587/", alt : "Facebook Lumy Naissance" }
										]
					},
					{
						title 			: "Zombie Escape",
						short_desc		: "Survive! That is your only objective.<br>Kill zombies and help your friends in this multiplayer game.",
						full_desc 		: "In this multiplayer game, the players are lost in a sewer system full of zombies. They must collect items with the aim of surviving.<br>A game developed during a 2 weeks course, as a means to introduce the interaction between Programmers and Game Designers.",
						keypoints 		: ["Multiplayer management", "Screen split", "InGame UI", "Items management", "Integration with Game Designers"],
						tools	 		: ["Unity"],
						context			: ["3 Programmers","3 Game Designers"],
						repository		: "https://github.com/galliotgreg/Zombi-Escape.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/games/zombie/preview2.png",
						images 			: [
											{ img : "../docs/assets/img/projects/games/zombie/2.png", alt : "Player view" },
											{ img : "../docs/assets/img/projects/games/zombie/1.gif", alt : "Multiplayer" }, // todo solo
											{ img : "../docs/assets/img/projects/games/zombie/3.png", alt : "Final Score" },
										],
						videos			: [
											//{ img : "../docs/assets/img/video.png", link : "", alt : "" }// todo
										]
					},
					{
						title 			: "Billy and his friends",
						short_desc		: "A game proposing an asymmetric gameplay. A \"blind\" player controls the terrain in order to help others.",
						full_desc 		: "\"Billy and his friends\" is a multiplayer game that proposes an asymmetric gameplay. The regular players must solve a puzzle while a \"blind\" player trigger some action (e.g. tilting the terrain).<br>This is a demostration used to validate the idea of the proposed game. As the game would use several [small] levels, a level creation tool was designed to parse a text file and generate the objects in game.",
						keypoints 		: ["Asymmetric gameplay","Levels described by text files","Idea validation"],
						tools	 		: ["Unity"],
						context			: ["1 Programmer","5 Game Designers"],
						repository		: "https://github.com/Edwyn-Gamagora2017/billy.git",
						play			: "https://edwynbatista.com/billy",
						preview_image 	: "../docs/assets/img/projects/games/billy/1.png",
						images 			: [
											{ img : "../docs/assets/img/projects/games/billy/1.png", alt : "Logo" },
											{ img : "../docs/assets/img/projects/games/billy/2.png", alt : "Character" },
											{ img : "../docs/assets/img/projects/games/billy/1.gif", alt : "Opening doors" },
											{ img : "../docs/assets/img/projects/games/billy/2.gif", alt : "Activating bridges" },
											{ img : "../docs/assets/img/projects/games/billy/4.png", alt : "3D perspective" }
										],
						videos			: [
											//{ img : "../docs/assets/img/video.png", link : "", alt : "" }//todo
										]
					}
				]
			},
			{
				title : "Applications",
				index : 1,
				items : [
					{
						title 			: "Nexarium : Games and Blockchain",
						short_desc		: "Games inside the blockchain: Nexarium is an app to trade game assets in the Ethereum blockchain.",
						full_desc 		: "The games of B2Expand share assets among them by using the Ethereum blockchain. The gamers can buy assets, use them in several games and finally sell them.<br>This app is the trading point of the Nexarium ecosystem. The user can create a wallet and manipulate its blockchain assets. That is the true ownership of assets.<br><br>Among several tasks, I was engaged on:<ul><li>The conception of the app's architecture : hierarchy, modularity and reusability;</li><li>Communication with the blockchain Ethereum on Unity3D;</li><li>Edition of Smart Contracts:</li><li>Creation of a submodule git for handling authetication using a state machine  (can be integrated into the company's Unity3D games);</li></ul><br>I invite you to check the developed work on the report attached.",
						keypoints 		: ["Architecture","Blockchain","Smart Contracts"],
						tools	 		: ["Unity3D","Nethereum","Solidity","Ganache","Remix"],
						context			: ["B2Expand"],
						repository		: undefined,
						play			: undefined, // todo
						preview_image 	: "../docs/assets/img/projects/applications/nexarium/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/applications/nexarium/1.png", alt : "List of available assets" },
											{ img : "../docs/assets/img/projects/applications/nexarium/2.png", alt : "Authetication panel" }
										],
						videos			: [
											{ img : "../docs/assets/img/report.png", link : "../docs/assets/doc/InternshipReport-EdwynBatista-M2-Gamagora-2018.pdf", alt : "Development Report" }
										]
					},
					{
						title 			: "Computer Vision",
						short_desc		: "A short demonstration of Computer vision in games.<br>Mouth and marker detection.",
						full_desc 		: "A short demonstration of Computer vision in games.<br>In this game, the player can beat the monster by freezing him (Mouth opening) and hitting him (Marker detection). The webcamera image is used as source to a Neural Network that detects the face; Image processing is used to extract elements that  trigger actions in the game.",
						keypoints 		: ["Mouth Opening/Closing detection", "Face detection", "Marker detection", "Image processing"],
						tools	 		: ["Unity","OpenCV (EmguCV)"],
						context			: ["3 Programmers"],
						repository		: "https://github.com/GeboWunjo/OpenCV.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/applications/vision/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/applications/vision/1.png", alt : "In-game scene" },
											{ img : "../docs/assets/img/projects/applications/vision/2.png", alt : "Recognition Effect" },
											{ img : "../docs/assets/img/projects/applications/vision/3.png", alt : "Detection" }
										],
						videos			: [
											//{ img : "../docs/assets/img/video.png", link : "", alt : "" }//todo
										]
					},
					{
						title 			: "Nao Robot",
						short_desc		: "Choose an animal and Nao, the robot, will guess it.",
						full_desc 		: "This project is a guessing game elaborated as part of the Human-robot interaction course (Radboud University, Nehterlands).<br>The player chooses an animal in a list. Then the robot asks some questions in order to guess their choice.<br>The solution is developed using the robot dev kit, which is able to deal with voice recognition, robot movements etc.",
						keypoints 		: ["Human-robot interaction"],
						tools	 		: ["Nao Robot dev kit"],
						context			: ["2 Programmers"],
						repository		: undefined,
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/applications/nao/preview3.png",
						images 			: [
											{ img : "../docs/assets/img/projects/applications/nao/3.png", alt : "Nao Robot" },
											{ img : "../docs/assets/img/projects/applications/nao/1.png", alt : "Game implementation" },
											{ img : "../docs/assets/img/projects/applications/nao/2.png", alt : "We will never forget each other" }
										],
						videos			: []
					}
				]
			},
			{
				title : "Modeling and Image Synthesis",
				index : 2,
				items : [
					{
						title 			: "Image Synthesis : Ray tracing",
						short_desc		: "The exploration of Image Synthesis techniques",
						full_desc 		: "Some algorithms for the synthesis of 3D images. It includes:<ul><li>the intersection of rays and objects (Spheres and Planes), using Bounding Boxes;</li><li>Reflexion and Refraction;</li><li>Direct lighting.</li></ul>",
						keypoints 		: ["Ray Tracing","Bounding boxes","Lighting","Reflexion","Refraction"],
						tools	 		: ["C++"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/Synthesis3d.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/model/synthesis/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/model/synthesis/1.png", alt : "Direct lighting" },
											{ img : "../docs/assets/img/projects/model/synthesis/2.png", alt : "Reflexion" }
										],
						videos			: []
					},
					{
						title 			: "Shaders",
						short_desc		: "Implementing shaders to generate 3D images",
						full_desc 		: "Algorithms for the synthesis of 3D images by using shaders. It includes:<ul><li>Direct lighting;</li><li>Model/View/Projection transformations;</li><li>Applying textures;</li><li>Mirrors and Portals.</li></ul>",
						keypoints 		: ["Lighting","Textures","Transformations","Mirrors and Portals"],
						tools	 		: ["C++"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/Shading.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/model/shader/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/model/shader/1.gif", alt : "GIF: Scene using shaders" },
											{ img : "../docs/assets/img/projects/model/shader/1.png", alt : "Scene using shaders with a mirror (white panel)" },
											{ img : "../docs/assets/img/projects/model/shader/2.png", alt : "Scene using shaders with portals (yellow panel)" }
										],
						videos			: []
					},
					{
						title 			: "Primitives and Meshes",
						short_desc		: "Creating a mesh of triagles to generate 3D objects and to manipulate complex 3D models.",
						full_desc 		: "This project starts with the creation of 3D objects (Sphere, Cylinder, Cone etc) based on the implementation of a mesh of triangles. Therefore, it has been evolved to the manipulation of pre-existing models (Simplification, Subdivision etc).",
						keypoints 		: ["Triangle Mesh","Simplification","Subdivision"],
						tools	 		: ["OpenGL","C++"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/Complex_Systems_Algorithms.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/model/mesh/1.3.png",
						images 			: [
											{ img : "../docs/assets/img/projects/model/mesh/1.gif", alt : "Cylinder" },
											{ img : "../docs/assets/img/projects/model/mesh/2.gif", alt : "Cone" },
											{ img : "../docs/assets/img/projects/model/mesh/3.gif", alt : "Simplification" },
											{ img : "../docs/assets/img/projects/model/mesh/4.gif", alt : "Subdivision (See Terrain Generation)" }
										],
						videos			: []
					},
					{
						title 			: "Terrain Generation",
						short_desc		: "Generating terrain using a triangle mesh and calculating routes.",
						full_desc 		: "During a challenge to produce Terrain Generation solutions, I decided to apply the modeling algorithms (See the section about meshes) to obtain a terrain.<br>A square was generated as the basis for the terrain. Then, the subdivision of the triangle mesh (associated to some perturbation) generates the relief.<br>To obtain the routes that reach every point of the mesh, The \"Kruskal's\" algorithm for Minimum Spanning Tree was applied.",
						keypoints 		: ["Triangle Mesh","Subdivision","Kruskal","Minimum Spanning Tree"],
						tools	 		: ["OpenGL","C++"],
						context			: ["Individual"],
						repository		: undefined, // todo
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/model/terrain/1.png",
						images 			: [
											{ img : "../docs/assets/img/projects/model/terrain/1.png", alt : "More detailed relief" },
											{ img : "../docs/assets/img/projects/model/terrain/2.png", alt : "Less detailed relief" },
											{ img : "../docs/assets/img/projects/model/terrain/3.png", alt : "Routes" },
											{ img : "../docs/assets/img/projects/model/terrain/4.png", alt : "Minimum Spanning Tree" }
										],
						videos			: []
					},
					{
						title 			: "Curves",
						short_desc		: "Exploration of algorithms for the representation of curves.",
						full_desc 		: "The drawing of curves is performed via several techniques:<ul><li>Bézier (Bernstein polynomial);</li><li>Hermite;</li><li>Casteljau.</li></ul><br>Then, theses methods are integrated into the representation of surface.", // todo tp7
						keypoints 		: ["Bézier","Hermite","Casteljau","Surfaces"],
						tools	 		: ["OpenGL","C++"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/ModelingCurves.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/model/curve/1.png",
						images 			: [
											{ img : "../docs/assets/img/projects/model/curve/1-curve.gif", alt : "Bezier curve" },
											{ img : "../docs/assets/img/projects/model/curve/1-surf.gif", alt : "Swept surface" },
											{ img : "../docs/assets/img/projects/model/curve/2-surf.gif", alt : "Ruled surface" },
											{ img : "../docs/assets/img/projects/model/curve/3-surf.gif", alt : "Bezier surface" }
										],
						videos			: []
					},
					{
						title 			: "Voxels",
						short_desc		: "Representing 3D objects via Voxels",
						full_desc 		: "This project presents the application of voxels to represent 3D objects, allowing the execution of multiple operations to construct complex objects based on simple ones.<br>Operations that can be applied to the objects:<ul><li>Union;</li><li>Intersection;</li><li>Subtraction;</li><li>etc.</li></ul><br>The user can use an object to add/remove content to the scene at runtime.",
						keypoints 		: ["Voxel Operations"],
						tools	 		: ["OpenGL","C++"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/ModelingVoxel.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/model/voxel/1.png",
						images 			: [
											{ img : "../docs/assets/img/projects/model/voxel/1.gif", alt : "Objects created from operations" },
											{ img : "../docs/assets/img/projects/model/voxel/2.gif", alt : "Changing granularity" },
											{ img : "../docs/assets/img/projects/model/voxel/3.gif", alt : "Insertion/Remotion tool" }
										],
						videos			: []
					},
					{
						title 			: "2D Kinematics",
						short_desc		: "Implementing algorithms for 2D Kinematics and applying them to move an arm.",
						full_desc 		: "The algorithms for Direct and Inverse Kinematics are applied on an articulated arm, that follows the mouse. Each arm's joint has restrictions of rotation angle.",
						keypoints 		: ["Direct Kinematics","Inverse Kinematics","Joints and Angle restriction"],
						tools	 		: ["OpenGL","C++"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/kinematics.git",
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/model/kinematics/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/model/kinematics/1.gif", alt : "Moving arm (Inverse Kinematics)" }
										],
						videos			: []
					}
				]
			},
			{
				title : "Artificial Intelligence",
				index : 3,
				items : [
					{
						title 			: "A star / Dijkstra",
						short_desc		: "Implementation and comparison between path finding algorithms; Customizable maps; Choose enemy's algorithm.",
						full_desc 		: "The enemies use the path finding algorithms to follow the player. This demonstration presents the implementation and comparison between the path finding algorithms. Choose the algorithms which your enemies will use to follow the player and see theirs traces.<br>Create and edit your maps (and costs of terrains) via text files.",
						keypoints 		: ["Graph algorithms","Map described by a text file"],
						tools	 		: ["Unity"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/Complex_Systems_Algorithms.git",
						play			: "https://edwynbatista.herokuapp.com/astar",
						preview_image 	: "../docs/assets/img/projects/ai/astar/preview2.png",
						images 			: [
											{ img : "../docs/assets/img/projects/ai/astar/1.png", alt : "A* and Dijkstra paths" },
											{ img : "../docs/assets/img/projects/ai/astar/2.png", alt : "A* and Dijkstra paths" }
										],
						videos			: []
					},
					{
						title 			: "Flocking",
						short_desc		: "Check how subjects behave based on the group. They follow the target and avoid obstacles.",
						full_desc 		: "The behavior of a subject is based on the group. Move the pig and the birds will follow him, while they avoid the obstacles. Choose the field of view and see how they behave.",
						keypoints 		: ["Group behavior algorithm"],
						tools	 		: ["Unity"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/Complex_Systems_Algorithms.git",
						play			: "https://edwynbatista.com/flocking",
						preview_image 	: "../docs/assets/img/projects/ai/flocking/preview2.png",
						images 			: [
											{ img : "../docs/assets/img/projects/ai/flocking/2.png", alt : "field of view : 360 degrees" },
											{ img : "../docs/assets/img/projects/ai/flocking/1.png", alt : "field of view : 90 degrees" } // todo video
										],
						videos			: []
					},
					{
						title 			: "Genetic",
						short_desc		: "The problem of the travelling salesperson solved by the genetic algorithm.",
						full_desc 		: "The problem of the travelling salesperson is solved by the genetic metaheuristic. In this demo, the player will collect the coins, following a short path among them (considering the cost of the terrain). If you want, you can choose between to check the generations or to see the the final solution.<br>Create and edit your maps (and costs of terrains) via text files.",
						keypoints 		: ["Genetic metaheuristic","Implementation of a reusable framework for the genetic metaheuristic","View generations/final result","Map described by a text file"],
						tools	 		: ["Unity"],
						context			: ["Individual"],
						repository		: "https://github.com/Edwyn-Gamagora2017/Complex_Systems_Algorithms.git",
						play			: "https://edwynbatista.com/genetic",
						preview_image 	: "../docs/assets/img/projects/ai/genetic/preview2.png",
						images 			: [
											{ img : "../docs/assets/img/projects/ai/genetic/1.png", alt : "Genetic : View generations" } // todo video
										],
						videos			: []
					}
				]
			},
			{
				title : "Education",
				index : 4,
				items : [
					{
						title 			: "Desafio",
						short_desc		: "What about exercising the subjects of your classes by playing a game with your classmates? \"Desafio\" is a mobile game that makes the students collaborate and compete during a class section.",
						full_desc 		: "The \"Desafio\" proposes a game to be played during a class section. The students download the mobile application and play a multiplayer quiz.<br>The gameplay was oriented to emphasize the interaction among the students, by stimulating them to collaborate and to compete. They can help their team partners by sending them tips, or block their opponents with the freezing ray, for example. And the interaction that happens outside the application is just as interesting.<br>This way, they can exercise the subjects of classes and have fun at the same time.",
						keypoints 		: ["Gamification of classes","Multiplayer","Experimentation during classes","Mobile game for the students","Web Service to concentrate the content"],
						tools	 		: ["Unity","AngularJS","SailsJS"],
						context			: ["Individual (Bachelor Thesis)"],
						repository		: undefined,
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/education/desafio/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/education/desafio/1.png", alt : "Welcome Screen" },
											{ img : "../docs/assets/img/projects/education/desafio/2.png", alt : "Multiple Choice Activity" },
											{ img : "../docs/assets/img/projects/education/desafio/3.png", alt : "Matching Activity" },
											{ img : "../docs/assets/img/projects/education/desafio/4.png", alt : "Freezing Ray Item's Effect" },
											{ img : "../docs/assets/img/projects/education/desafio/6.png", alt : "Ranking" }
										],
						videos			: [
											//{ img : "../docs/assets/img/gplay.png", link : "", alt : "" }//todo gplay
										]
					},
					{
						title 			: "UCC",
						short_desc		: "The programming contests are an important part of a student's formation in computer science. So, let's train in a fun way!",
						full_desc 		: "As part of the PET-CC (Students who produce activities for helping other students), we proposed a contest inspired on the ACM programming competitions for bachelor's degree students. So, the competitors came on saturdays to participate in several modalities. Some gifts for the winners... Exercising and sharing knowledge were the objective.",
						keypoints 		: ["Gamification"],
						tools	 		: ["Boca (Contest Platform)"],
						context			: ["2 trainees (PET-CC)"],
						repository		: undefined,
						play			: undefined,
						preview_image 	: "../docs/assets/img/projects/education/ucc/preview.png",
						images 			: [
											{ img : "../docs/assets/img/projects/education/ucc/1.png", alt : "Ultimate Coding Championship" },
											{ img : "../docs/assets/img/projects/education/ucc/2.png", alt : "Modalities" },
											{ img : "../docs/assets/img/projects/education/ucc/3.png", alt : "Participants" }
										],
						videos			: []
					}
				]
			}
		];
	  }
	};
});

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
	preview_image 	: "../docs/assets/img/projects//preview.png",
	images 			: [
						{ img : "../docs/assets/img/projects//1.png", alt : "" }
					],
	videos			: [
						{ img : "../docs/assets/img/video.png", link : "", alt : "" },
						{ img : "../docs/assets/img/facebook.png", link : "", alt : "" },
						{ img : "../docs/assets/img/gplay.png", link : "", alt : "" }
					]
}
*/