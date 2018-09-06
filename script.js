// ____    _       ___   ____    _____   ____
// / ___|  | |     |_ _| |  _ \  | ____| |  _ \
// \___ \  | |      | |  | | | | |  _|   | |_) |
//  ___) | | |___   | |  | |_| | | |___  |  _ <
// |____/  |_____| |___| |____/  |_____| |_| \_\

const slider = document.getElementById("slider");
const output = document.getElementById("pwLength");
output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
}

// - - - - - - - - - - - - - - - - - - - - -

const generatedPassword = document.getElementById("generatedPassword");

// simple shuffel for an array
function shuffle(array) {
	let m = array.length, t, i;
	// while there remain elements to shuffle
	while (m) {
		// pick a remaining element
		i = Math.floor(Math.random() * m--);

		// and swap it with the current element
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

// function copyPass() {
// 	generatedPassword.select();
// 	document.execCommand("copy");
// }

// function for copy to clipboard
function copyPass(element) {
	const $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}

let listForGenerator = [];
let tempList = [];


//  _   _  _   _  __  __  ____   _____  ____   ____
// | \ | || | | ||  \/  || __ ) | ____||  _ \ / ___|
// |  \| || | | || |\/| ||  _ \ |  _|  | |_) |\___ \
// | |\  || |_| || |  | || |_) || |___ |  _ <  ___) |
// |_| \_| \___/ |_|  |_||____/ |_____||_| \_\|____/

const allNumbers = document.getElementById("allnum");
const number_0 = document.getElementById("num0");
const number_1 = document.getElementById("num1");
const number_2 = document.getElementById("num2");
const number_3 = document.getElementById("num3");
const number_4 = document.getElementById("num4");
const number_5 = document.getElementById("num5");
const number_6 = document.getElementById("num6");
const number_7 = document.getElementById("num7");
const number_8 = document.getElementById("num8");
const number_9 = document.getElementById("num9");

function allNumbersButton() {
	if (allNumbers.classList.contains("active")) {
		number_0.classList.remove("active");
		number_1.classList.remove("active");
		number_2.classList.remove("active");
		number_3.classList.remove("active");
		number_4.classList.remove("active");
		number_5.classList.remove("active");
		number_6.classList.remove("active");
		number_7.classList.remove("active");
		number_8.classList.remove("active");
		number_9.classList.remove("active");
	} else {
		number_0.classList.add("active");
		number_1.classList.add("active");
		number_2.classList.add("active");
		number_3.classList.add("active");
		number_4.classList.add("active");
		number_5.classList.add("active");
		number_6.classList.add("active");
		number_7.classList.add("active");
		number_8.classList.add("active");
		number_9.classList.add("active");
	}
}

function removeActiveAllNumbers() {
	setTimeout(function() {
		if (number_0.classList.contains("active")
		&&number_1.classList.contains("active")
		&&number_2.classList.contains("active")
		&&number_3.classList.contains("active")
		&&number_4.classList.contains("active")
		&&number_5.classList.contains("active")
		&&number_6.classList.contains("active")
		&&number_7.classList.contains("active")
		&&number_8.classList.contains("active")
		&&number_9.classList.contains("active")) {
			allNumbers.classList.add("active");
		} else {
			allNumbers.classList.remove("active");
		}
	}, 1);

}

//       _      _____  _____  _____  _____  ____   ____
//  ___ | |    | ____||_   _||_   _|| ____||  _ \ / ___|
// / __|| |    |  _|    | |    | |  |  _|  | |_) |\___ \
// \__ \| |___ | |___   | |    | |  | |___ |  _ <  ___) |
// |___/|_____||_____|  |_|    |_|  |_____||_| \_\|____/

const allSLetters = document.getElementById("allSLetters");
const sLetter_a = document.getElementById("sLeta");
const sLetter_b = document.getElementById("sLetb");
const sLetter_c = document.getElementById("sLetc");
const sLetter_d = document.getElementById("sLetd");
const sLetter_e = document.getElementById("sLete");
const sLetter_f = document.getElementById("sLetf");
const sLetter_g = document.getElementById("sLetg");
const sLetter_h = document.getElementById("sLeth");
const sLetter_i = document.getElementById("sLeti");
const sLetter_j = document.getElementById("sLetj");
const sLetter_k = document.getElementById("sLetk");
const sLetter_l = document.getElementById("sLetl");
const sLetter_m = document.getElementById("sLetm");
const sLetter_n = document.getElementById("sLetn");
const sLetter_o = document.getElementById("sLeto");
const sLetter_p = document.getElementById("sLetp");
const sLetter_q = document.getElementById("sLetq");
const sLetter_r = document.getElementById("sLetr");
const sLetter_s = document.getElementById("sLets");
const sLetter_t = document.getElementById("sLett");
const sLetter_u = document.getElementById("sLetu");
const sLetter_v = document.getElementById("sLetv");
const sLetter_w = document.getElementById("sLetw");
const sLetter_x = document.getElementById("sLetx");
const sLetter_y = document.getElementById("sLety");
const sLetter_z = document.getElementById("sLetz");

function allSLettersButton() {
	if (allSLetters.classList.contains("active")) {
		sLetter_a.classList.remove("active");
		sLetter_b.classList.remove("active");
		sLetter_c.classList.remove("active");
		sLetter_d.classList.remove("active");
		sLetter_e.classList.remove("active");
		sLetter_f.classList.remove("active");
		sLetter_g.classList.remove("active");
		sLetter_h.classList.remove("active");
		sLetter_i.classList.remove("active");
		sLetter_j.classList.remove("active");
		sLetter_k.classList.remove("active");
		sLetter_l.classList.remove("active");
		sLetter_m.classList.remove("active");
		sLetter_n.classList.remove("active");
		sLetter_o.classList.remove("active");
		sLetter_p.classList.remove("active");
		sLetter_q.classList.remove("active");
		sLetter_r.classList.remove("active");
		sLetter_s.classList.remove("active");
		sLetter_t.classList.remove("active");
		sLetter_u.classList.remove("active");
		sLetter_v.classList.remove("active");
		sLetter_w.classList.remove("active");
		sLetter_x.classList.remove("active");
		sLetter_y.classList.remove("active");
		sLetter_z.classList.remove("active");
	} else {
		sLetter_a.classList.add("active");
		sLetter_b.classList.add("active");
		sLetter_c.classList.add("active");
		sLetter_d.classList.add("active");
		sLetter_e.classList.add("active");
		sLetter_f.classList.add("active");
		sLetter_g.classList.add("active");
		sLetter_h.classList.add("active");
		sLetter_i.classList.add("active");
		sLetter_j.classList.add("active");
		sLetter_k.classList.add("active");
		sLetter_l.classList.add("active");
		sLetter_m.classList.add("active");
		sLetter_n.classList.add("active");
		sLetter_o.classList.add("active");
		sLetter_p.classList.add("active");
		sLetter_q.classList.add("active");
		sLetter_r.classList.add("active");
		sLetter_s.classList.add("active");
		sLetter_t.classList.add("active");
		sLetter_u.classList.add("active");
		sLetter_v.classList.add("active");
		sLetter_w.classList.add("active");
		sLetter_x.classList.add("active");
		sLetter_y.classList.add("active");
		sLetter_z.classList.add("active");
	}
}

function removeActiveAllSLetters() {
	setTimeout(function() {
		if (sLetter_a.classList.contains("active")
		&&sLetter_b.classList.contains("active")
		&&sLetter_c.classList.contains("active")
		&&sLetter_d.classList.contains("active")
		&&sLetter_e.classList.contains("active")
		&&sLetter_f.classList.contains("active")
		&&sLetter_g.classList.contains("active")
		&&sLetter_h.classList.contains("active")
		&&sLetter_i.classList.contains("active")
		&&sLetter_j.classList.contains("active")
		&&sLetter_k.classList.contains("active")
		&&sLetter_l.classList.contains("active")
		&&sLetter_m.classList.contains("active")
		&&sLetter_n.classList.contains("active")
		&&sLetter_o.classList.contains("active")
		&&sLetter_p.classList.contains("active")
		&&sLetter_q.classList.contains("active")
		&&sLetter_r.classList.contains("active")
		&&sLetter_s.classList.contains("active")
		&&sLetter_t.classList.contains("active")
		&&sLetter_u.classList.contains("active")
		&&sLetter_v.classList.contains("active")
		&&sLetter_w.classList.contains("active")
		&&sLetter_x.classList.contains("active")
		&&sLetter_y.classList.contains("active")
		&&sLetter_z.classList.contains("active")) {
			allSLetters.classList.add("active");
		} else {
			allSLetters.classList.remove("active");
		}
	}, 1);
}

//  _      _      _____  _____  _____  _____  ____   ____
// | |__  | |    | ____||_   _||_   _|| ____||  _ \ / ___|
// | '_ \ | |    |  _|    | |    | |  |  _|  | |_) |\___ \
// | |_) || |___ | |___   | |    | |  | |___ |  _ <  ___) |
// |_.__/ |_____||_____|  |_|    |_|  |_____||_| \_\|____/

const allBLetters = document.getElementById("allBLetters");
const bLetter_a = document.getElementById("bLeta");
const bLetter_b = document.getElementById("bLetb");
const bLetter_c = document.getElementById("bLetc");
const bLetter_d = document.getElementById("bLetd");
const bLetter_e = document.getElementById("bLete");
const bLetter_f = document.getElementById("bLetf");
const bLetter_g = document.getElementById("bLetg");
const bLetter_h = document.getElementById("bLeth");
const bLetter_i = document.getElementById("bLeti");
const bLetter_j = document.getElementById("bLetj");
const bLetter_k = document.getElementById("bLetk");
const bLetter_l = document.getElementById("bLetl");
const bLetter_m = document.getElementById("bLetm");
const bLetter_n = document.getElementById("bLetn");
const bLetter_o = document.getElementById("bLeto");
const bLetter_p = document.getElementById("bLetp");
const bLetter_q = document.getElementById("bLetq");
const bLetter_r = document.getElementById("bLetr");
const bLetter_s = document.getElementById("bLets");
const bLetter_t = document.getElementById("bLett");
const bLetter_u = document.getElementById("bLetu");
const bLetter_v = document.getElementById("bLetv");
const bLetter_w = document.getElementById("bLetw");
const bLetter_x = document.getElementById("bLetx");
const bLetter_y = document.getElementById("bLety");
const bLetter_z = document.getElementById("bLetz");

function allBLettersButton() {
	if (allBLetters.classList.contains("active")) {
		bLetter_a.classList.remove("active");
		bLetter_b.classList.remove("active");
		bLetter_c.classList.remove("active");
		bLetter_d.classList.remove("active");
		bLetter_e.classList.remove("active");
		bLetter_f.classList.remove("active");
		bLetter_g.classList.remove("active");
		bLetter_h.classList.remove("active");
		bLetter_i.classList.remove("active");
		bLetter_j.classList.remove("active");
		bLetter_k.classList.remove("active");
		bLetter_l.classList.remove("active");
		bLetter_m.classList.remove("active");
		bLetter_n.classList.remove("active");
		bLetter_o.classList.remove("active");
		bLetter_p.classList.remove("active");
		bLetter_q.classList.remove("active");
		bLetter_r.classList.remove("active");
		bLetter_s.classList.remove("active");
		bLetter_t.classList.remove("active");
		bLetter_u.classList.remove("active");
		bLetter_v.classList.remove("active");
		bLetter_w.classList.remove("active");
		bLetter_x.classList.remove("active");
		bLetter_y.classList.remove("active");
		bLetter_z.classList.remove("active");
	} else {
		bLetter_a.classList.add("active");
		bLetter_b.classList.add("active");
		bLetter_c.classList.add("active");
		bLetter_d.classList.add("active");
		bLetter_e.classList.add("active");
		bLetter_f.classList.add("active");
		bLetter_g.classList.add("active");
		bLetter_h.classList.add("active");
		bLetter_i.classList.add("active");
		bLetter_j.classList.add("active");
		bLetter_k.classList.add("active");
		bLetter_l.classList.add("active");
		bLetter_m.classList.add("active");
		bLetter_n.classList.add("active");
		bLetter_o.classList.add("active");
		bLetter_p.classList.add("active");
		bLetter_q.classList.add("active");
		bLetter_r.classList.add("active");
		bLetter_s.classList.add("active");
		bLetter_t.classList.add("active");
		bLetter_u.classList.add("active");
		bLetter_v.classList.add("active");
		bLetter_w.classList.add("active");
		bLetter_x.classList.add("active");
		bLetter_y.classList.add("active");
		bLetter_z.classList.add("active");
	}
}

function removeActiveAllBLetters() {
	setTimeout(function () {
		if (bLetter_a.classList.contains("active")
		&&bLetter_b.classList.contains("active")
		&&bLetter_c.classList.contains("active")
		&&bLetter_d.classList.contains("active")
		&&bLetter_e.classList.contains("active")
		&&bLetter_f.classList.contains("active")
		&&bLetter_g.classList.contains("active")
		&&bLetter_h.classList.contains("active")
		&&bLetter_i.classList.contains("active")
		&&bLetter_j.classList.contains("active")
		&&bLetter_k.classList.contains("active")
		&&bLetter_l.classList.contains("active")
		&&bLetter_m.classList.contains("active")
		&&bLetter_n.classList.contains("active")
		&&bLetter_o.classList.contains("active")
		&&bLetter_p.classList.contains("active")
		&&bLetter_q.classList.contains("active")
		&&bLetter_r.classList.contains("active")
		&&bLetter_s.classList.contains("active")
		&&bLetter_t.classList.contains("active")
		&&bLetter_u.classList.contains("active")
		&&bLetter_v.classList.contains("active")
		&&bLetter_w.classList.contains("active")
		&&bLetter_x.classList.contains("active")
		&&bLetter_y.classList.contains("active")
		&&bLetter_z.classList.contains("active")) {
			allBLetters.classList.add("active");
		} else {
			allBLetters.classList.remove("active");
		}
	}, 1);
}

// - - - - - - - - - - - - - - - - - - - - -
//                          _         _           _                               _
//  ___  _ __    ___   ___ (_)  __ _ | |     ___ | |__    __ _  _ __  __ _   ___ | |_   ___  _ __  ___
// / __|| '_ \  / _ \ / __|| | / _` || |    / __|| '_ \  / _` || '__|/ _` | / __|| __| / _ \| '__|/ __|
// \__ \| |_) ||  __/| (__ | || (_| || |   | (__ | | | || (_| || |  | (_| || (__ | |_ |  __/| |   \__ \
// |___/| .__/  \___| \___||_| \__,_||_|    \___||_| |_| \__,_||_|   \__,_| \___| \__| \___||_|   |___/
//      |_|

const allSC = document.getElementById("allSC");
const sc_1 = document.getElementById("sc1");
const sc_2 = document.getElementById("sc2");
const sc_3 = document.getElementById("sc3");
const sc_4 = document.getElementById("sc4");
const sc_5 = document.getElementById("sc5");
const sc_6 = document.getElementById("sc6");
const sc_7 = document.getElementById("sc7");
const sc_8 = document.getElementById("sc8");
const sc_9 = document.getElementById("sc9");
const sc_10 = document.getElementById("sc10");
const sc_11 = document.getElementById("sc11");
const sc_12 = document.getElementById("sc12");
const sc_13 = document.getElementById("sc13");
const sc_14 = document.getElementById("sc14");
const sc_15 = document.getElementById("sc15");
const sc_16 = document.getElementById("sc16");
const sc_17 = document.getElementById("sc17");
const sc_18 = document.getElementById("sc18");
const sc_19 = document.getElementById("sc19");
const sc_20 = document.getElementById("sc20");
const sc_21 = document.getElementById("sc21");
const sc_22 = document.getElementById("sc22");
const sc_23 = document.getElementById("sc23");
const sc_24 = document.getElementById("sc24");
const sc_25 = document.getElementById("sc25");
const sc_26 = document.getElementById("sc26");
const sc_27 = document.getElementById("sc27");
const sc_28 = document.getElementById("sc28");
const sc_29 = document.getElementById("sc29");
const sc_30 = document.getElementById("sc30");
const sc_31 = document.getElementById("sc31");
const sc_32 = document.getElementById("sc32");
const sc_33 = document.getElementById("sc33");
const sc_34 = document.getElementById("sc34");
const sc_35 = document.getElementById("sc35");
const sc_36 = document.getElementById("sc36");

function allSCButton() {
	if (allSC.classList.contains("active")) {
		sc_1.classList.remove("active");
		sc_2.classList.remove("active");
		sc_3.classList.remove("active");
		sc_4.classList.remove("active");
		sc_5.classList.remove("active");
		sc_6.classList.remove("active");
		sc_7.classList.remove("active");
		sc_8.classList.remove("active");
		sc_9.classList.remove("active");
		sc_10.classList.remove("active");
		sc_11.classList.remove("active");
		sc_12.classList.remove("active");
		sc_13.classList.remove("active");
		sc_14.classList.remove("active");
		sc_15.classList.remove("active");
		sc_16.classList.remove("active");
		sc_17.classList.remove("active");
		sc_18.classList.remove("active");
		sc_19.classList.remove("active");
		sc_20.classList.remove("active");
		sc_21.classList.remove("active");
		sc_22.classList.remove("active");
		sc_23.classList.remove("active");
		sc_24.classList.remove("active");
		sc_25.classList.remove("active");
		sc_26.classList.remove("active");
		sc_27.classList.remove("active");
		sc_28.classList.remove("active");
		sc_29.classList.remove("active");
		sc_30.classList.remove("active");
		sc_31.classList.remove("active");
		sc_32.classList.remove("active");
		sc_33.classList.remove("active");
		sc_34.classList.remove("active");
		sc_35.classList.remove("active");
		sc_36.classList.remove("active");
	} else {
		sc_1.classList.add("active");
		sc_2.classList.add("active");
		sc_3.classList.add("active");
		sc_4.classList.add("active");
		sc_5.classList.add("active");
		sc_6.classList.add("active");
		sc_7.classList.add("active");
		sc_8.classList.add("active");
		sc_9.classList.add("active");
		sc_10.classList.add("active");
		sc_11.classList.add("active");
		sc_12.classList.add("active");
		sc_13.classList.add("active");
		sc_14.classList.add("active");
		sc_15.classList.add("active");
		sc_16.classList.add("active");
		sc_17.classList.add("active");
		sc_18.classList.add("active");
		sc_19.classList.add("active");
		sc_20.classList.add("active");
		sc_21.classList.add("active");
		sc_22.classList.add("active");
		sc_23.classList.add("active");
		sc_24.classList.add("active");
		sc_25.classList.add("active");
		sc_26.classList.add("active");
		sc_27.classList.add("active");
		sc_28.classList.add("active");
		sc_29.classList.add("active");
		sc_30.classList.add("active");
		sc_31.classList.add("active");
		sc_32.classList.add("active");
		sc_33.classList.add("active");
		sc_34.classList.add("active");
		sc_35.classList.add("active");
		sc_36.classList.add("active");
	}
}

function removeActiveAllSC() {
	setTimeout(function () {
		if (sc_1.classList.contains("active")
		&&sc_2.classList.contains("active")
		&&sc_3.classList.contains("active")
		&&sc_4.classList.contains("active")
		&&sc_5.classList.contains("active")
		&&sc_6.classList.contains("active")
		&&sc_7.classList.contains("active")
		&&sc_8.classList.contains("active")
		&&sc_9.classList.contains("active")
		&&sc_10.classList.contains("active")
		&&sc_11.classList.contains("active")
		&&sc_12.classList.contains("active")
		&&sc_13.classList.contains("active")
		&&sc_14.classList.contains("active")
		&&sc_15.classList.contains("active")
		&&sc_16.classList.contains("active")
		&&sc_17.classList.contains("active")
		&&sc_18.classList.contains("active")
		&&sc_19.classList.contains("active")
		&&sc_20.classList.contains("active")
		&&sc_21.classList.contains("active")
		&&sc_22.classList.contains("active")
		&&sc_23.classList.contains("active")
		&&sc_24.classList.contains("active")
		&&sc_25.classList.contains("active")
		&&sc_26.classList.contains("active")
		&&sc_27.classList.contains("active")
		&&sc_28.classList.contains("active")
		&&sc_29.classList.contains("active")
		&&sc_30.classList.contains("active")
		&&sc_31.classList.contains("active")
		&&sc_32.classList.contains("active")
		&&sc_33.classList.contains("active")
		&&sc_34.classList.contains("active")
		&&sc_35.classList.contains("active")
		&&sc_36.classList.contains("active")) {
			allSC.classList.add("active");
		} else {
			allSC.classList.remove("active");
		}
	}, 1);
}

// - - - - - - - - - - - - - - - - - - - - -
//   ____  _____  _   _  _____  ____      _   _____  ___   ____
//  / ___|| ____|| \ | || ____||  _ \    / \ |_   _|/ _ \ |  _ \
// | |  _ |  _|  |  \| ||  _|  | |_) |  / _ \  | | | | | || |_) |
// | |_| || |___ | |\  || |___ |  _ <  / ___ \ | | | |_| ||  _ <
//  \____||_____||_| \_||_____||_| \_\/_/   \_\|_|  \___/ |_| \_\
function gen() {

	// numbers
	if (number_0.classList.contains("active")) {
		listForGenerator.push("0")
	}
	if (number_1.classList.contains("active")) {
		listForGenerator.push("1")
	}
	if (number_2.classList.contains("active")) {
		listForGenerator.push("2")
	}
	if (number_3.classList.contains("active")) {
		listForGenerator.push("3")
	}
	if (number_4.classList.contains("active")) {
		listForGenerator.push("4")
	}
	if (number_5.classList.contains("active")) {
		listForGenerator.push("5")
	}
	if (number_6.classList.contains("active")) {
		listForGenerator.push("6")
	}
	if (number_7.classList.contains("active")) {
		listForGenerator.push("7")
	}
	if (number_8.classList.contains("active")) {
		listForGenerator.push("8")
	}
	if (number_9.classList.contains("active")) {
		listForGenerator.push("9")
	}

	// - - - - - - - - - - - - - - - - - - - - -

	// sLetters
	if (sLetter_a.classList.contains("active")) {
		listForGenerator.push("a")
	}
	if (sLetter_b.classList.contains("active")) {
		listForGenerator.push("b")
	}
	if (sLetter_c.classList.contains("active")) {
		listForGenerator.push("c")
	}
	if (sLetter_d.classList.contains("active")) {
		listForGenerator.push("d")
	}
	if (sLetter_e.classList.contains("active")) {
		listForGenerator.push("e")
	}
	if (sLetter_f.classList.contains("active")) {
		listForGenerator.push("f")
	}
	if (sLetter_g.classList.contains("active")) {
		listForGenerator.push("g")
	}
	if (sLetter_h.classList.contains("active")) {
		listForGenerator.push("h")
	}
	if (sLetter_i.classList.contains("active")) {
		listForGenerator.push("i")
	}
	if (sLetter_j.classList.contains("active")) {
		listForGenerator.push("j")
	}
	if (sLetter_k.classList.contains("active")) {
		listForGenerator.push("k")
	}
	if (sLetter_l.classList.contains("active")) {
		listForGenerator.push("l")
	}
	if (sLetter_m.classList.contains("active")) {
		listForGenerator.push("m")
	}
	if (sLetter_n.classList.contains("active")) {
		listForGenerator.push("n")
	}
	if (sLetter_o.classList.contains("active")) {
		listForGenerator.push("o")
	}
	if (sLetter_p.classList.contains("active")) {
		listForGenerator.push("p")
	}
	if (sLetter_q.classList.contains("active")) {
		listForGenerator.push("q")
	}
	if (sLetter_r.classList.contains("active")) {
		listForGenerator.push("r")
	}
	if (sLetter_s.classList.contains("active")) {
		listForGenerator.push("s")
	}
	if (sLetter_t.classList.contains("active")) {
		listForGenerator.push("t")
	}
	if (sLetter_u.classList.contains("active")) {
		listForGenerator.push("u")
	}
	if (sLetter_v.classList.contains("active")) {
		listForGenerator.push("v")
	}
	if (sLetter_w.classList.contains("active")) {
		listForGenerator.push("w")
	}
	if (sLetter_x.classList.contains("active")) {
		listForGenerator.push("x")
	}
	if (sLetter_y.classList.contains("active")) {
		listForGenerator.push("y")
	}
	if (sLetter_z.classList.contains("active")) {
		listForGenerator.push("z")
	}

	// - - - - - - - - - - - - - - - - - - - - -

	// bLetters
	if (bLetter_a.classList.contains("active")) {
		listForGenerator.push("A")
	}
	if (bLetter_b.classList.contains("active")) {
		listForGenerator.push("B")
	}
	if (bLetter_c.classList.contains("active")) {
		listForGenerator.push("C")
	}
	if (bLetter_d.classList.contains("active")) {
		listForGenerator.push("D")
	}
	if (bLetter_e.classList.contains("active")) {
		listForGenerator.push("E")
	}
	if (bLetter_f.classList.contains("active")) {
		listForGenerator.push("F")
	}
	if (bLetter_g.classList.contains("active")) {
		listForGenerator.push("G")
	}
	if (bLetter_h.classList.contains("active")) {
		listForGenerator.push("H")
	}
	if (bLetter_i.classList.contains("active")) {
		listForGenerator.push("I")
	}
	if (bLetter_j.classList.contains("active")) {
		listForGenerator.push("J")
	}
	if (bLetter_k.classList.contains("active")) {
		listForGenerator.push("K")
	}
	if (bLetter_l.classList.contains("active")) {
		listForGenerator.push("L")
	}
	if (bLetter_m.classList.contains("active")) {
		listForGenerator.push("M")
	}
	if (bLetter_n.classList.contains("active")) {
		listForGenerator.push("N")
	}
	if (bLetter_o.classList.contains("active")) {
		listForGenerator.push("O")
	}
	if (bLetter_p.classList.contains("active")) {
		listForGenerator.push("P")
	}
	if (bLetter_q.classList.contains("active")) {
		listForGenerator.push("Q")
	}
	if (bLetter_r.classList.contains("active")) {
		listForGenerator.push("R")
	}
	if (bLetter_s.classList.contains("active")) {
		listForGenerator.push("S")
	}
	if (bLetter_t.classList.contains("active")) {
		listForGenerator.push("T")
	}
	if (bLetter_u.classList.contains("active")) {
		listForGenerator.push("U")
	}
	if (bLetter_v.classList.contains("active")) {
		listForGenerator.push("V")
	}
	if (bLetter_w.classList.contains("active")) {
		listForGenerator.push("W")
	}
	if (bLetter_x.classList.contains("active")) {
		listForGenerator.push("X")
	}
	if (bLetter_y.classList.contains("active")) {
		listForGenerator.push("Y")
	}
	if (bLetter_z.classList.contains("active")) {
		listForGenerator.push("Z")
	}

	// - - - - - - - - - - - - - - - - - - - - -

	// special characters
	if (sc_1.classList.contains("active")) {
		listForGenerator.push(" ")
	}
	if (sc_2.classList.contains("active")) {
		listForGenerator.push("!")
	}
	if (sc_3.classList.contains("active")) {
		listForGenerator.push("\"")
	}
	if (sc_4.classList.contains("active")) {
		listForGenerator.push("#")
	}
	if (sc_5.classList.contains("active")) {
		listForGenerator.push("$")
	}
	if (sc_6.classList.contains("active")) {
		listForGenerator.push("%")
	}
	if (sc_7.classList.contains("active")) {
		listForGenerator.push("&")
	}
	if (sc_8.classList.contains("active")) {
		listForGenerator.push("\'")
	}
	if (sc_9.classList.contains("active")) {
		listForGenerator.push("(")
	}
	if (sc_10.classList.contains("active")) {
		listForGenerator.push(")")
	}
	if (sc_11.classList.contains("active")) {
		listForGenerator.push("*")
	}
	if (sc_12.classList.contains("active")) {
		listForGenerator.push("+")
	}
	if (sc_13.classList.contains("active")) {
		listForGenerator.push("-")
	}
	if (sc_14.classList.contains("active")) {
		listForGenerator.push(",")
	}
	if (sc_15.classList.contains("active")) {
		listForGenerator.push(".")
	}
	if (sc_16.classList.contains("active")) {
		listForGenerator.push("/")
	}
	if (sc_17.classList.contains("active")) {
		listForGenerator.push(":")
	}
	if (sc_18.classList.contains("active")) {
		listForGenerator.push(";")
	}
	if (sc_19.classList.contains("active")) {
		listForGenerator.push(">")
	}
	if (sc_20.classList.contains("active")) {
		listForGenerator.push("=")
	}
	if (sc_21.classList.contains("active")) {
		listForGenerator.push("<")
	}
	if (sc_22.classList.contains("active")) {
		listForGenerator.push("?")
	}
	if (sc_23.classList.contains("active")) {
		listForGenerator.push("@")
	}
	if (sc_24.classList.contains("active")) {
		listForGenerator.push("[")
	}
	if (sc_25.classList.contains("active")) {
		listForGenerator.push("]")
	}
	if (sc_26.classList.contains("active")) {
		listForGenerator.push("\\")
	}
	if (sc_27.classList.contains("active")) {
		listForGenerator.push("^")
	}
	if (sc_28.classList.contains("active")) {
		listForGenerator.push("_")
	}
	if (sc_29.classList.contains("active")) {
		listForGenerator.push("{")
	}
	if (sc_30.classList.contains("active")) {
		listForGenerator.push("|")
	}
	if (sc_31.classList.contains("active")) {
		listForGenerator.push("}")
	}
	if (sc_32.classList.contains("active")) {
		listForGenerator.push("\`")
	}
	if (sc_33.classList.contains("active")) {
		listForGenerator.push("\´")
	}
	if (sc_34.classList.contains("active")) {
		listForGenerator.push("~")
	}
	if (sc_35.classList.contains("active")) {
		listForGenerator.push("§")
	}
	if (sc_36.classList.contains("active")) {
		listForGenerator.push("°")
	}

	// - - - - - - - - - - - - - - - - - - - - -

	for (let i = 0; i < 47; i++) {
		for (let j = 0; j < listForGenerator.length; j++) {
			tempList.push(listForGenerator[j])
		}
		shuffle(tempList);
		let finalGen = tempList.slice(0, slider.value)
		generatedPassword.innerHTML = finalGen.join("");
	}
	tempList = [];
	listForGenerator = [];

	document.getElementById("copyBtn").disabled = false;
}

// - - - - - - - - - - - - - - - - - - - - -

// function to change buttons to active
function itemClicked(clickedId) {
	const tempItem = document.getElementById(clickedId);
	if (tempItem.classList.contains("active")) {
		tempItem.classList.remove("active");
	} else {
		tempItem.classList.add("active");
	}
}
