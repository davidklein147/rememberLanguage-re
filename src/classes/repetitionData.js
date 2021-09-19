export class RepetitionData {
    #lavel;    
    #repetitionDate;
    constructor(translateWord, type) {
        this.translateWordId = translateWord || 0;
        this.type = type || "source";
        this.#lavel = 1;
        this.score = null;
    }
    getLavel() {
        return this.#lavel;
    }
    //need to ensure that @parem oldLavel and @param scroe are correct
    setLavel(oldLavel, score, lavels) {
        if (this.#lavel === lavels.sumLavels) {
            this.#lavel = oldLavel;
        }
        else if ((oldLavel > 0 && oldLavel <= lavels.sumLavels) &&
            (score > 0 && score <= lavels.scores.sumScores)) {
            this.#lavel = lavels.getLavlelByScore(oldLavel, score);
        }
        else {
            throw new Error("incorrect lavel or score");
        }
    }
    getRepetitionDate() {
        return this.#repetitionDate;
    }
    setRepetitionDate(date) {
        this.#repetitionDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    setDateByLavel(lavels) {
        let date = new Date();
        date.setDate(date.getDate() + lavels.daysOfEachLavel[this.#lavel - 1]);
        this.setRepetitionDate(date);
        console.log(date);
    }
}
//need to add conditinFu that ensures that the string is in order   
export class Lavels {
    constructor(daysOfEachLavel, scorse) {
        if (daysOfEachLavel && Array.isArray(daysOfEachLavel)) {
            //needs get and set for this.daysOfEachLavel
            this.daysOfEachLavel = daysOfEachLavel.split("-").map(Number);
        }
        else {
            this.daysOfEachLavel = [1, 2, 7, 30, 90];
        }
        this.sumLavels = this.daysOfEachLavel.length;
        this.scores = scorse  ? scorse : !Array.isArray(daysOfEachLavel)? daysOfEachLavel: new Scores(this.sumLavels);
    }
    addLavel(sumDays) {
        var value = this.daysOfEachLavel.find(elem => sumDays <= elem);
        if (value === sumDays) {
            throw new Error("this lavel alredy exists");
        }
        else if (value <= 0) {
            throw new Error("this lavel is incorrect");
        }
        else if (typeof (value) == undefined) {
            this.daysOfEachLavel.push(value);
        }
        else {
            var index = this.daysOfEachLavel.indexOf(value);
            this.daysOfEachLavel.splice(index, 0, sumDays);
        }
    }
    chengeLavel(lavel, newDays) {
        if (lavel > 0 && lavel < this.sumLavels + 1) {
            if (newDays >= this.daysOfEachLavel[lavel - 1] && newDays > this.daysOfEachLavel[lavel]) {
                this.daysOfEachLavel[lavel - 1] = newDays;
            }
            else {
                throw new Error("the value of the days is wrong between the lavles");
            }
        }
    }
    getLavlelByScore(oldLavel, score) {
        if (Number.isNaN(this.scores.daysOfEachScore[score - 1])) {
            return 1;
        }
        else if (oldLavel + this.scores.daysOfEachScore[score - 1] >= 1) {
            return oldLavel + this.scores.daysOfEachScore[score - 1];
        }
        else {
            return 1;
        }
    }
}

export class Scores {
    constructor(sumLavels, lavelsOfEachScore) {
        this.sumLavels = sumLavels;
        if (lavelsOfEachScore) {
            this.lavelsOfEachScore = lavelsOfEachScore.split("-").map(Number);
        }
        else {
            this.lavelsOfEachScore = [1, 0, -1, -2, +"/"];
        }
        this.sumScores = this.lavelsOfEachScore.length;
    }
    //Need a serious examination
    addScore(valueOfScore) {
        var value = this.lavelsOfEachScore.find(elem => valueOfScore >= elem);
        if (value === valueOfScore) {
            throw new Error("this score alredy exists");
            //have to add condition if the @parem valueOfScore is more or lass then sum of lavels instesd 5
        }
        else if (Math.abs(value) >= this.sumLavels) {
            throw new Error("incorrect value");
        }
        else if (value === undefined) {
            this.lavelsOfEachScore.splice(this.lavelsOfEachScore.length - 2, 0, value);
        }
        else {
            var index = this.lavelsOfEachScore.indexOf(value);
            this.lavelsOfEachScore.splice(index, 0, value);
        }
    }
    chengeScore(score, newDays) {
        //unable to chenge the vaule of last cell in the arrty.
        if (score >= 0 && score < this.sumScores) {
            if (Number.isNaN(this.lavelsOfEachScore[score])) {
                if (newDays <= this.lavelsOfEachScore[score - 1]) {
                    this.lavelsOfEachScore[score - 1] = newDays;
                }
                else {
                    throw new Error("the value of the days is wrong between the scores");
                }
            }
            else {
                if (newDays > this.lavelsOfEachScore[score] && newDays <= this.lavelsOfEachScore[score - 1]) {
                    this.lavelsOfEachScore[score - 1] = newDays;
                }
                else {
                    throw new Error("the value of the days is wrong between the scores");
                }
            }
        }
        else {
            throw new Error("the value of the score is wrong");
        }
    }
}
