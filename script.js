var cells = document.getElementsByClassName("cell");
var flags = [[null, null, null], [null, null, null], [null, null, null]];
var mybtn = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
];
ply = "X";
var txte1 = document.getElementById("txt-e1");
var xwin = document.getElementById("x-win");
var ywin = document.getElementById("y-win");
var result = document.getElementById("result");
var mosavi = document.getElementById("mosavi");
var mosaviConter = 0;
var mosav;
var mosavX = 0;
var mosavO = 0;


plyPlayer = function () {
    showindex = function (x, y) {
        if (flags[x][y] == null) {
            if (ply == "X") {
                flags[x][y] = "X";
                mybtn[x][y].innerHTML = "X";
                mybtn[x][y].classList.add("X-style");
                ply = "O";
            } else if (ply == "O") {
                flags[x][y] = "O";
                mybtn[x][y].innerHTML = "O";
                mybtn[x][y].classList.add("O-style");
                ply = "X";
            }
        } else {
            txte1.innerHTML = "مثل آدم بازی کن ";
        }

        mosav = flags[x][y];
        if (mosav == "X") {
            mosavX++;
        } else if (mosav == "O") {
            mosavO++;
        }
        if (mosavX == 5 || mosavO == 5) {
            mosaviConter++;
            mosavi.innerHTML = "Equal";
            xwin.innerHTML = "";
            ywin.innerHTML = "";
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            mosavX = 0;
            mosavO = 0;
            newgames();
        }


        ceakGame();
    }
    var counterX = 0;
    var counterO = 0;
    ceakGame = function () {
        //x win code ceack

        if ((flags[0][0] == "X" && flags [0][1] == "X" && flags [0][2] == "X")) {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][0] == "X" && flags [1][0] == "X" && flags [2][0] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][1] == "X" && flags [1][1] == "X" && flags [2][1] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "X" && flags [1][2] == "X" && flags [2][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO;
            newgames();
        } else if (flags[1][0] == "X" && flags [1][1] == "X" && flags [1][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[2][0] == "X" && flags [2][1] == "X" && flags [2][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][0] == "X" && flags [1][1] == "X" && flags [2][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "X" && flags [1][1] == "X" && flags [2][0] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * O   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        }

        //y win code ceack

        if ((flags[0][0] == "O" && flags [0][1] == "O" && flags [0][2] == "O")) {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][0] == "O" && flags [1][0] == "O" && flags [2][0] == "O") {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][1] == "O" && flags [1][1] == "O" && flags [2][1] == "O") {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "O" && flags [1][2] == "O" && flags [2][2] == "O") {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            mosavX = 0;
            mosavO = 0;
            counterO++;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[1][0] == "O" && flags [1][1] == "O" && flags [1][2] == "O") {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[2][0] == "O" && flags [2][1] == "O" && flags [2][2] == "O") {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO;
            newgames();
        } else if (flags[0][0] == "O" && flags [1][1] == "O" && flags [2][2] == "O") {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "O" && flags [1][1] == "O" && flags [2][0] == "O") {
            xwin.innerHTML = " * X  loser * ";
            ywin.innerHTML = " * O  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        }
    }
    var news = document.getElementById("new-game");
    news.onclick = function () {
        newgames();
        counterO = 0;
        counterX = 0;
        mosaviConter = 0;
        mosavX = 0;
        mosavO = 0;
        xwin.innerHTML = "";
        ywin.innerHTML = "";
        result.innerHTML = "";
        mosavi.innerHTML = "";
        ply = "X";
    }
    newgames = function () {
        mybtn[0][0].innerHTML = "";
        flags[0][0] = null;
        mybtn[0][0].classList.remove("X-style");
        mybtn[0][0].classList.remove("O-style");
        mybtn[0][1].innerHTML = "";
        flags[0][1] = null;
        mybtn[0][1].classList.remove("X-style");
        mybtn[0][1].classList.remove("O-style");
        mybtn[0][2].innerHTML = "";
        flags[0][2] = null;
        mybtn[0][2].classList.remove("X-style");
        mybtn[0][2].classList.remove("O-style");
        mybtn[1][0].innerHTML = "";
        flags[1][0] = null;
        mybtn[1][0].classList.remove("X-style");
        mybtn[1][0].classList.remove("O-style");
        mybtn[1][1].innerHTML = "";
        flags[1][1] = null;
        mybtn[1][1].classList.remove("X-style");
        mybtn[1][1].classList.remove("O-style");
        mybtn[1][2].innerHTML = "";
        flags[1][2] = null;
        mybtn[1][2].classList.remove("X-style");
        mybtn[1][2].classList.remove("O-style");
        mybtn[2][0].innerHTML = "";
        flags[2][0] = null;
        mybtn[2][0].classList.remove("X-style");
        mybtn[2][0].classList.remove("O-style");
        mybtn[2][1].innerHTML = "";
        flags[2][1] = null;
        mybtn[2][1].classList.remove("X-style");
        mybtn[2][1].classList.remove("O-style");
        mybtn[2][2].innerHTML = "";
        flags[2][2] = null;
        mybtn[2][2].classList.remove("X-style");
        mybtn[2][2].classList.remove("O-style");
    };
}

plypc = function () {
    showindex = function (x, y) {
        if (flags[x][y] == null) {
            var computerMove = Math.floor(Math.random() * 8);
            if (ply == "X") {
                cells[computerMove] = 'O';
                flags[x][y] = "X";
                mybtn[x][y].classList.add("X-style");
                mybtn[x][y].innerHTML = "X";
                while (computerMove == 0 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 1 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 2 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 3 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 4 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 5 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 6 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 7 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 8 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                if (computerMove == 0) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 1) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 2) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 3) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 4) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 5) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 6) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 7) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }
                if (computerMove == 8) {
                    flags[x][y] = "O";
                    cells[computerMove].classList.add("O-style");
                    cells[computerMove].innerHTML = "O";
                }

                console.log(computerMove);

            }
            else if (ply == "O") {
                cells[computerMove] = 'X';
                flags[x][y] = "O";
                mybtn[x][y].classList.add("O-style");
                mybtn[x][y].innerHTML = "O";
                computerMove = Math.floor(Math.random() * 8);

                while (computerMove == 0 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 1 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 2 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 3 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 4 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 5 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 6 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 7 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                while (computerMove == 8 && (cells[computerMove].innerHTML == 'O' || cells[computerMove].innerHTML == 'X')) {
                    computerMove = Math.floor(Math.random() * 8);
                }
                if (computerMove == 0) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 1) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 2) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 3) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 4) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 5) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 6) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 7) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
                if (computerMove == 8) {
                    flags[x][y] = "X";
                    cells[computerMove].classList.add("X-style");
                    cells[computerMove].innerHTML = "X";
                }
            }
        } else {
            txte1.innerHTML = "مثل آدم بازی کن ";
        }



        mosav = flags[x][y];
        if (mosav == "X") {
            mosavX++;
        } else if (mosav == "O") {
            mosavO++;
        }
        if (mosavX == 5 || mosavO == 5) {
            mosaviConter++;
            mosavi.innerHTML = "Equal";
            xwin.innerHTML = "";
            ywin.innerHTML = "";
            result.innerHTML = " x  player : " + counterX + " ---- " + " PC  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            mosavX = 0;
            mosavO = 0;
            newgames();
        }
        ceakGame();
    }
    var counterX = 0;
    var counterO = 0;
    ceakGame = function () {
        //x win code ceack

        if ((flags[0][0] == "X" && flags [0][1] == "X" && flags [0][2] == "X")) {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][0] == "X" && flags [1][0] == "X" && flags [2][0] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " O  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][1] == "X" && flags [1][1] == "X" && flags [2][1] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " PC  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "X" && flags [1][2] == "X" && flags [2][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " PC  player : " + counterO;
            newgames();
        } else if (flags[1][0] == "X" && flags [1][1] == "X" && flags [1][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " PC  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[2][0] == "X" && flags [2][1] == "X" && flags [2][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " PC  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][0] == "X" && flags [1][1] == "X" && flags [2][2] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " PC  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "X" && flags [1][1] == "X" && flags [2][0] == "X") {
            xwin.innerHTML = " * X  winner * ";
            ywin.innerHTML = " * PC   loser * ";
            mosavi.innerHTML = "";
            counterX++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " x  player : " + counterX + " ---- " + " PC  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        }

        //y win code ceack

        if ((flags[0][0] == "O" && flags [0][1] == "O" && flags [0][2] == "O")) {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][0] == "O" && flags [1][0] == "O" && flags [2][0] == "O") {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][1] == "O" && flags [1][1] == "O" && flags [2][1] == "O") {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "O" && flags [1][2] == "O" && flags [2][2] == "O") {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[1][0] == "O" && flags [1][1] == "O" && flags [1][2] == "O") {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[2][0] == "O" && flags [2][1] == "O" && flags [2][2] == "O") {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][0] == "O" && flags [1][1] == "O" && flags [2][2] == "O") {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        } else if (flags[0][2] == "O" && flags [1][1] == "O" && flags [2][0] == "O") {
            xwin.innerHTML = " * PC  loser * ";
            ywin.innerHTML = " * player  winner  * ";
            mosavi.innerHTML = "";
            counterO++;
            mosavX = 0;
            mosavO = 0;
            result.innerHTML = " pc  player : " + counterX + " ---- " + " player  player : " + counterO + " ---- " + "Equal play" + mosaviConter;
            newgames();
        }
    }
    var news = document.getElementById("new-game");
    news.onclick = function () {
        newgames();
        counterO = 0;
        counterX = 0;
        mosaviConter = 0;
        mosavX = 0;
        mosavO = 0;
        xwin.innerHTML = "";
        ywin.innerHTML = "";
        result.innerHTML = "";
        mosavi.innerHTML = "";
        ply = "X";
    }
    newgames = function () {
        mybtn[0][0].innerHTML = "";
        flags[0][0] = null;
        mybtn[0][0].classList.remove("X-style");
        mybtn[0][0].classList.remove("O-style");
        mybtn[0][1].innerHTML = "";
        flags[0][1] = null;
        mybtn[0][1].classList.remove("X-style");
        mybtn[0][1].classList.remove("O-style");
        mybtn[0][2].innerHTML = "";
        flags[0][2] = null;
        mybtn[0][2].classList.remove("X-style");
        mybtn[0][2].classList.remove("O-style");
        mybtn[1][0].innerHTML = "";
        flags[1][0] = null;
        mybtn[1][0].classList.remove("X-style");
        mybtn[1][0].classList.remove("O-style");
        mybtn[1][1].innerHTML = "";
        flags[1][1] = null;
        mybtn[1][1].classList.remove("X-style");
        mybtn[1][1].classList.remove("O-style");
        mybtn[1][2].innerHTML = "";
        flags[1][2] = null;
        mybtn[1][2].classList.remove("X-style");
        mybtn[1][2].classList.remove("O-style");
        mybtn[2][0].innerHTML = "";
        flags[2][0] = null;
        mybtn[2][0].classList.remove("X-style");
        mybtn[2][0].classList.remove("O-style");
        mybtn[2][1].innerHTML = "";
        flags[2][1] = null;
        mybtn[2][1].classList.remove("X-style");
        mybtn[2][1].classList.remove("O-style");
        mybtn[2][2].innerHTML = "";
        flags[2][2] = null;
        mybtn[2][2].classList.remove("X-style");
        mybtn[2][2].classList.remove("O-style");
    };
}






