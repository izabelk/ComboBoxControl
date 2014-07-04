define(function () {

    var Trainer = (function () {

        var lastTrainerId = 0;

        var Trainer = function Trainer(name, age, avataUrl) {
            this.name = name;
            this.age = age;
            this.id = ++lastTrainerId;
            this.avatarUrl = avataUrl;
            return this;
        }

        Trainer.prototype = {
            getData: function () {
                return {
                    id: this.id,
                    name: this.name,
                    age: this.age,
                    avatarUrl: this.avatarUrl
                };
            }
        }

        return Trainer;

    })();

    return Trainer;

});