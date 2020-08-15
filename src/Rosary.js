export class Mystery {
    constructor(name, decades, days) {
        this.name = name;
        this.decades = decades;
        this.days = days;
    }

    getName() {
        return this.name;
    }

    getDecades() {
        return this.decades;
    }

    getDays() {
        return this.days;
    }
}

export const Part = Object.freeze({
    Opening: 0,
    FirstDecade: 1,
    SecondDecade: 2,
    ThirdDecade: 3,
    FourthDecade: 4,
    FifthDecade: 5,
    Ending: 6 
});

export class Rosary {
    constructor(lang) {
        this.mysteries = [];    // Stores the mysteries and decades of the Rosary.
        this.lang = lang;       // Stores language data for the prayers.
    }

    addMystery(mystery) {
        this.mysteries.push(mystery);
    }

    getMystery(name) {
        return this.mysteries.find(mystery => mystery.getName() === name);
    }

    getMysteries() {
        return this.mysteries;
    }

    getPrayers(stage) {
        // Construct an array of strings that hold the prayers in the
        // local language.
        switch (stage) {
            case Part.Opening:
                return [
                    this.lang.prayers.signOfTheCross.text,
                    this.lang.prayers.apostlesCreed.text,
                    this.lang.prayers.ourFather.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.gloryBe.text
                ];
            case Part.Ending:
                return [
                    this.lang.prayers.hailHolyQueen.text,
                    this.lang.prayers.letUsPray.text
                ];
            default:
                return [
                    this.lang.prayers.ourFather.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.hailMary.text,
                    this.lang.prayers.gloryBe.text,
                    this.lang.prayers.fatima.text
                ];
        }
    }

    today() {
        let day = new Date().getDay();
        for (let i = 0; i < this.mysteries.length; i++) {
            if (this.mysteries[i].getDays().includes(day))
                return this.mysteries[i];
        }

        return null;
    }
}

export function build(lang) {
    let rosary = new Rosary(lang);

    // Add the mysteries of the rosary.
    // The days of the week: Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5,
    // and Saturday = 6.
    rosary.addMystery(new Mystery(lang.mysteries.joyful.name, lang.mysteries.joyful.decades, [1, 6]));
    rosary.addMystery(new Mystery(lang.mysteries.glorious.name, lang.mysteries.glorious.decades, [3, 0]));
    rosary.addMystery(new Mystery(lang.mysteries.sorrowful.name, lang.mysteries.sorrowful.decades, [1, 5]));
    rosary.addMystery(new Mystery(lang.mysteries.luminous.name, lang.mysteries.luminous.decades, [4]));

    return rosary;
}