let a = 0;
function setup() {
    createCanvas(600, 600);
    background("rgb(30,26,26)");
}

function draw() {





    // Anger Triangles
    fill(91, 7, 7, 255 - a * 3);
    stroke(0);
    strokeWeight(0.5);
    triangle(440, 560 - a, 320 + a, 315 + a, 260 - a, 335 + a); //17
    triangle(475, 420 - a, 400 + a, 220 + a, 350 - a, 250 + a); //16
    triangle(150, 38 - a, 400 + a, 225 + a, 350 - a, 260 + a);  //15
    triangle(75, 575 - a, 450 + a, 220 + a, 420 - a, 180 + a);  //14
    triangle(149, 70 - a, 450 + a, 230 + a, 450 - a, 275 + a);  //13
    triangle(455, 490 - a, 340 + a, 370 + a, 325 - a, 330 + a); //12
    triangle(230, 584 - a, 365 + a, 280 + a, 365 - a, 320 + a); //11
    triangle(320, 560 - a, 332 + a, 370 + a, 300 - a, 390 + a); //10
    triangle(390, 470 - a, 350 + a, 80 + a, 345 - a, 150 + a);  //9
    triangle(480, 470 - a, 340 + a, 170 + a, 333 - a, 80 + a);  //8
    triangle(330, 10 - a, 327 + a, 175 + a, 170 - a, 420 + a);  //7
    triangle(480, 550 - a, 160 + a, 415 + a, 110 - a, 440 + a); //6
    triangle(20, 350 - a, 120 + a, 459 + a, 240 - a, 380 + a);  //5
    triangle(10, 548 - a, 240 + a, 398 + a, 220 - a, 460 + a);  //4
    triangle(100, 70 - a, 240 + a, 446 + a, 360 - a, 375 + a);  //3
    triangle(60, 50 - a, 255 + a, 476 + a, 220 - a, 485 + a);   //2
    triangle(50, 90 - a, 175 + a, 536 + a, 190 - a, 495 + a);   //1

    /* Shattered Thought Triangles */
    fill(239, 7, 7, 255 - a * 2);
    // Main red triangles
    triangle(217, 490 - a, 175 + a, 536 + a, 190 - a, 495 + a); //1
    triangle(231, 450 - a, 255 + a, 476 + a, 220 - a, 485 + a); //2
    triangle(250, 420 - a, 240 + a, 446 + a, 360 - a, 375 + a); //3
    triangle(160, 480 - a, 240 + a, 398 + a, 220 - a, 460 + a); //4
    triangle(20, 590 - a, 120 + a, 459 + a, 240 - a, 380 + a);  //5
    triangle(180, 350 - a, 160 + a, 415 + a, 110 - a, 440 + a); //6
    triangle(320, 110 - a, 327 + a, 175 + a, 170 - a, 420 + a); //7
    triangle(400, 40 - a, 340 + a, 170 + a, 333 - a, 80 + a);   //8
    triangle(380, 70 - a, 350 + a, 80 + a, 345 - a, 150 + a);   //9
    triangle(320, 340 - a, 332 + a, 370 + a, 300 - a, 390 + a); //10
    triangle(352, 294 - a, 365 + a, 280 + a, 365 - a, 320 + a); //11
    triangle(335, 290 - a, 340 + a, 370 + a, 325 - a, 330 + a); //12
    triangle(419, 190 - a, 450 + a, 230 + a, 450 - a, 275 + a); //13
    triangle(455, 5 - a, 450 + a, 220 + a, 420 - a, 180 + a);   //14
    triangle(350, 290 - a, 400 + a, 225 + a, 350 - a, 260 + a); //15
    triangle(440, 10 - a, 400 + a, 220 + a, 350 - a, 250 + a);  //16
    triangle(400, 100 - a, 320 + a, 315 + a, 260 - a, 335 + a); //17

    /* Small central triangls turning into wonder */
    a = a + 1;
    noStroke();
    fill("#130505");
    triangle(300, 290 - a, 310 + a, 310 + a, 290 - a, 310 + a); //1
    fill("#EF707026");
    triangle(300, 290 - a / 2, 310 + a / 2, 310 + a / 2, 290 - a / 2, 310 + a / 2); //2
    fill("#EF707026");
    triangle(300, 290 - a / 3, 310 + a / 3, 310 + a / 3, 290 - a / 3, 310 + a / 3); //3
    fill("#EC585875");
    triangle(300, 290 - a / 4, 310 + a / 4, 310 + a / 4, 290 - a / 4, 310 + a / 4); //4
    fill("#EF9D70B7");
    triangle(300, 290 - a / 5, 310 + a / 5, 310 + a / 5, 290 - a / 5, 310 + a / 5); //5
    fill("#EFB870AA");
    triangle(300, 290 - a / 6, 310 + a / 6, 310 + a / 6, 290 - a / 6, 310 + a / 6); //6
    fill("#EFD870C4");
    triangle(300, 290 - a / 7, 310 + a / 7, 310 + a / 7, 290 - a / 7, 310 + a / 7); //7
    fill("#dcef70a8");
    triangle(300, 290 - a / 8, 310 + a / 8, 310 + a / 8, 290 - a / 8, 310 + a / 8); //8
    fill("#a1ef70ba");
    triangle(300, 290 - a / 9, 310 + a / 9, 310 + a / 9, 290 - a / 9, 310 + a / 9); //9
    fill("#98f761b3");
    triangle(300, 290 - a / 10, 310 + a / 10, 310 + a / 10, 290 - a / 10, 310 + a / 10);//10
    fill("#37f049b7");
    triangle(300, 290 - a / 11, 310 + a / 11, 310 + a / 11, 290 - a / 11, 310 + a / 11); //11
    fill("#35eca6cc");
    triangle(300, 290 - a / 12, 310 + a / 12, 310 + a / 12, 290 - a / 12, 310 + a / 12);//12      
    fill("#33bae8ba");
    triangle(300, 290 - a / 13, 310 + a / 13, 310 + a / 13, 290 - a / 13, 310 + a / 13);//13
    fill("#2e7ce8ba");
    triangle(300, 290 - a / 14, 310 + a / 14, 310 + a / 14, 290 - a / 14, 310 + a / 14);//14
    fill("#5c3de8ba");
    triangle(300, 290 - a / 15, 310 + a / 15, 310 + a / 15, 290 - a / 15, 310 + a / 15);//15
    fill("#9b3de8ba");
    triangle(300, 290 - a / 16, 310 + a / 16, 310 + a / 16, 290 - a / 16, 310 + a / 16);//16
    fill("#d33de8ba");
    triangle(300, 290 - a / 17, 310 + a / 17, 310 + a / 17, 290 - a / 17, 310 + a / 17);//17
    fill(random(255), random(255), 0, 150);
    frameRate(3 + a / 5);
    triangle(300, 290 - a / 18, 310 + a / 18, 310 + a / 18, 290 - a / 18, 310 + a / 18);//18

}