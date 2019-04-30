	$('.tag1').hide();
	$('.tag2').hide();
	$('.tagline').hide();
	$('.img').hide();
	$('.section').hide();

			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			//var controls = new THREE.OrbitControls( camera );

			//controls.update() must be called after any manual changes to the camera's transform
			camera.position.set( 0, 0, 5 );
			//controls.update();

			function animate() {

				requestAnimationFrame( animate );

				// required if controls.enableDamping or controls.autoRotate are set to true
				controls.update();

				renderer.render( scene, camera );

			}

			//circle one
			var geometry1 = new THREE.CircleGeometry(.3,20,0,(Math.PI));
			var material1 = new THREE.MeshBasicMaterial( { color: 'black' } );
			var circle1 = new THREE.Mesh( geometry1, material1 );
			scene.add( circle1 );

			camera.position.z = 10;
			circle1.position.z= 0;

			var animate1 = function () {
				requestAnimationFrame( animate1 );

				// circle1.rotation.x += 0.01;
				// circle1.rotation.y += 0.01;
				circle1.rotation.z += 0.06;

				renderer.render( scene, camera );
			};

			animate1();
			

			//circle two
			var geometry2 = new THREE.CircleGeometry(0.48,20,0,(Math.PI));
			var material2 = new THREE.MeshBasicMaterial( { color: '#2df31a' } );
			var circle2 = new THREE.Mesh( geometry2, material2 );
			scene.add( circle2 );

			circle2.position.z= -0.001;

			var animate2 = function () {
				requestAnimationFrame( animate2 );

				// circle1.rotation.x += 0.01;
				// circle1.rotation.y += 0.01;
				circle2.rotation.z += 0.06;

				renderer.render( scene, camera );
			};

			animate2();


			//circle three
			var geometry3 = new THREE.CircleGeometry(0.73,20,0,(Math.PI));
			var material3 = new THREE.MeshBasicMaterial( { color: 'black' } );
			var circle3 = new THREE.Mesh( geometry3, material3 );
			scene.add( circle3 );

			circle3.position.z= -0.004;

			var animate3 = function () {
				requestAnimationFrame( animate3 );

				// circle1.rotation.x += 0.01;
				// circle1.rotation.y += 0.01;
				circle3.rotation.z -= 0.01;

				renderer.render( scene, camera );
			};

			animate3();

			//circle four
			var geometry4 = new THREE.CircleGeometry(1,20,0,(Math.PI));
			var material4 = new THREE.MeshBasicMaterial( { color: '#2df31a' } );
			var circle4 = new THREE.Mesh( geometry4, material4 );
			scene.add( circle4 );

			circle4.position.z= -0.006;

			var animate4 = function () {
				requestAnimationFrame( animate4 );

				// circle1.rotation.x += 0.01;
				// circle1.rotation.y += 0.01;
				circle4.rotation.z -= 0.01;

				renderer.render( scene, camera );
			};

			animate4();


			//circle five
			var geometry5 = new THREE.CircleGeometry(1.2,20,0,(Math.PI));
			var material5 = new THREE.MeshBasicMaterial( { color: 'black' } );
			var circle5 = new THREE.Mesh( geometry5, material5 );
			scene.add( circle5 );

			circle5.position.z= -0.008;

			var animate5 = function () {
				requestAnimationFrame( animate5 );

				// circle1.rotation.x += 0.01;
				// circle1.rotation.y += 0.01;
				circle5.rotation.z += 0.04;

				renderer.render( scene, camera );
			};

			animate5();

				//circle six
				var geometry6 = new THREE.CircleGeometry(1.3,20,0,(Math.PI));
				var material6 = new THREE.MeshBasicMaterial( { color: '#2df31a' } );
				var circle6 = new THREE.Mesh( geometry6, material6 );
				scene.add( circle6 );
	
				circle6.position.z= -0.01;
	
				var animate6 = function () {
					requestAnimationFrame( animate6 );
	
					// circle1.rotation.x += 0.01;
					// circle1.rotation.y += 0.01;
					circle6.rotation.z+= 0.04;
	
					renderer.render( scene, camera );
				};
	
				animate6();

				//circle seven
				var geometry7 = new THREE.CircleGeometry(1.6,20,0,(Math.PI));
				var material7 = new THREE.MeshBasicMaterial( { color: 'black' } );
				var circle7 = new THREE.Mesh( geometry7, material7 );
				scene.add( circle7 );
	
				circle7.position.z= -0.012;
	
				var animate7 = function () {
					requestAnimationFrame( animate7 );
	
					// circle1.rotation.x += 0.01;
					// circle1.rotation.y += 0.01;
					circle7.rotation.z-= 0.02;
	
					renderer.render( scene, camera );
				};
	
				animate7();

				//circle eight 
				var geometry8 = new THREE.CircleGeometry(1.8,20,0,(Math.PI));
				var material8 = new THREE.MeshBasicMaterial( { color: '#2df31a' } );
				var circle8 = new THREE.Mesh( geometry8, material8 );
				scene.add( circle8 );
	
				circle8.position.z= -0.014;
	
				var animate8 = function () {
					requestAnimationFrame( animate8 );
	
					// circle1.rotation.x += 0.01;
					// circle1.rotation.y += 0.01;
					circle8.rotation.z-= 0.02;
	
					renderer.render( scene, camera );
				};
	
				animate8();


				function IP(){
				var msg = new SpeechSynthesisUtterance('Initiating Protocols');
				window.speechSynthesis.speak(msg);};

				function LS(){
				var msg1 = new SpeechSynthesisUtterance('Hi there I am ace lets start ');
				window.speechSynthesis.speak(msg1);};

	
				setTimeout(IP,1600);

				setTimeout(LS,3000);

				var animation9 = function(){
					if(circle1.position.x>-5){
					 anim = requestAnimationFrame( animation9 );
					circle1.position.x -= 0.08;
					circle2.position.x -= 0.08;
					circle3.position.x -= 0.08;
					circle4.position.x -= 0.08;
					circle5.position.x -= 0.08;
					circle6.position.x -= 0.08;
					circle7.position.x -= 0.08;
					circle8.position.x -= 0.08;}
					
				}

				setTimeout(animation9,4000);


				var animation10 = function(){
					if(circle1.position.y<1.5){
					 anim = requestAnimationFrame( animation10 );
					circle1.position.y += 0.08;
					circle2.position.y += 0.08;
					circle3.position.y += 0.08;
					circle4.position.y += 0.08;
					circle5.position.y += 0.08;
					circle6.position.y += 0.08;
					circle7.position.y += 0.08;
					circle8.position.y += 0.08;}  
					
					
				}

				setTimeout(animation10,6500);

				function Description(){
					var msg2 = new SpeechSynthesisUtterance('Ace Is A Highly advanced artificial intelligence software designed and developed by z tech corporation. Z tech  corporation was founded in year two thousand nineteen. Here is the portfolio of founder of z tech corporation. ');
					window.speechSynthesis.speak(msg2);};

				setTimeout(Description,7000);


				var animation11 = function(){
					requestAnimationFrame( animation11);
					if(circle1.position.x>-30){
					circle1.position.y += 0.043;
					circle2.position.y += 0.043;
					circle3.position.y += 0.043;
					circle4.position.y += 0.043;
					circle5.position.y += 0.043;
					circle6.position.y += 0.043;
					circle7.position.y += 0.043;
					circle8.position.y += 0.043;

					circle1.position.x -= 0.08;
					circle2.position.x -= 0.08;
					circle3.position.x -= 0.08;
					circle4.position.x -= 0.08;
					circle5.position.x -= 0.08;
					circle6.position.x -= 0.08;
					circle7.position.x -= 0.08;
					circle8.position.x -= 0.08;
						
					circle1.position.z -= 0.04;
					circle2.position.z -= 0.04;
					circle3.position.z -= 0.04;
					circle4.position.z -= 0.04;
					circle5.position.z -= 0.04;
					circle6.position.z -= 0.04;
					circle7.position.z -= 0.04;
					circle8.position.z -= 0.04;

				}

				}

				setTimeout(animation11,12500);
				
				function animation12(){
				$('.para1').fadeOut();
				$('.para2').fadeOut();
				};

				setTimeout(animation12,13000);

				function animation13(){
					$('.tag1').fadeIn();
					$('.tag2').fadeIn();
				}

				setTimeout(animation13, 18000);


				setTimeout(function(){
					$('.tagline').fadeIn(1000);
				},20000)

				setTimeout(function(){
					$('.section').fadeIn(1000);
				},19000)







				