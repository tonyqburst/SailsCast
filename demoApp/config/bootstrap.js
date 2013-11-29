/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

    var dummyUsers = [
        {"name": "Ulric", "email": "mauris.erat@Mauris.edu"},
        {"name": "Alvin", "email": "tincidunt.dui.augue@laoreetipsum.org"},
        {"name": "Hammett", "email": "egestas.Sed.pharetra@ullamcorper.com"},
        {"name": "Cyrus", "email": "elit.a@idsapien.ca"},
        {"name": "Dylan", "email": "Donec.est@auctor.net"},
        {"name": "Kelly", "email": "felis@vestibulum.org"},
        {"name": "Howard", "email": "nisi.a@sit.co.uk"},
        {"name": "Hammett", "email": "In@Cum.net"},
        {"name": "Jason", "email": "Sed.nunc.est@nibhAliquam.net"},
        {"name": "Upton", "email": "Aliquam.erat@Cras.ca"},
        {"name": "Quinn", "email": "ullamcorper.velit@Donecatarcu.edu"},
        {"name": "Elliott", "email": "facilisis@acarcu.ca"},
        {"name": "Gabriel", "email": "a.feugiat.tellus@sed.org"},
        {"name": "Rooney", "email": "dictum.Proin@anuncIn.org"},
        {"name": "Marshall", "email": "adipiscing.elit.Curabitur@ornare.net"},
        {"name": "Lester", "email": "mauris.eu@non.co.uk"},
        {"name": "Herman", "email": "sit.amet.ante@nisl.org"},
        {"name": "Kamal", "email": "Aliquam.vulputate.ullamcorper@dolorNulla.edu"},
        {"name": "Odysseus", "email": "Proin.sed@natoquepenatibuset.org"},
        {"name": "Cyrus", "email": "nunc@mollis.co.uk"},
        {"name": "Ashton", "email": "lorem.vehicula.et@nec.edu"},
        {"name": "Cody", "email": "Aliquam.gravida@Aliquamnisl.com"},
        {"name": "Paki", "email": "justo@velfaucibusid.net"},
        {"name": "Wade", "email": "Donec.egestas@tempuseu.net"},
        {"name": "Solomon", "email": "Fusce.feugiat@pretiumnequeMorbi.com"},
        {"name": "Tad", "email": "arcu.Aliquam.ultrices@etmalesuada.com"},
        {"name": "Hiram", "email": "nisi@idsapien.ca"},
        {"name": "Michael", "email": "aliquam.iaculis@idrisus.org"},
        {"name": "Dylan", "email": "tellus@nisinibh.edu"},
        {"name": "Garrison", "email": "felis.purus@nibhvulputate.com"},
        {"name": "Kieran", "email": "elit.Aliquam@vitaerisusDuis.edu"},
        {"name": "Victor", "email": "lacinia@nasceturridiculusmus.co.uk"},
        {"name": "Hasad", "email": "auctor.quis@eget.ca"},
        {"name": "Orson", "email": "ultrices@euismodet.ca"},
        {"name": "Len", "email": "Quisque@eget.ca"},
        {"name": "Elliott", "email": "Fusce@ut.co.uk"},
        {"name": "Fuller", "email": "nec.orci.Donec@consectetuereuismodest.net"},
        {"name": "Mufutau", "email": "enim@dolor.edu"},
        {"name": "Merritt", "email": "vel@scelerisquescelerisque.org"},
        {"name": "Allistair", "email": "Duis.cursus@tempus.com"},
        {"name": "Perry", "email": "enim.gravida.sit@mollisnoncursus.org"},
        {"name": "Lionel", "email": "at.auctor@augueacipsum.co.uk"},
        {"name": "Jakeem", "email": "mauris.rhoncus.id@lobortisquis.ca"},
        {"name": "Quentin", "email": "arcu.Vestibulum@enim.org"},
        {"name": "Kareem", "email": "eleifend@eget.com"},
        {"name": "Hashim", "email": "enim@tinciduntnibhPhasellus.com"},
        {"name": "Gareth", "email": "sit.amet@ametdiameu.co.uk"},
        {"name": "Martin", "email": "auctor.nunc.nulla@ornareegestasligula.net"},
        {"name": "Fulton", "email": "Proin@porttitor.org"},
        {"name": "Kasper", "email": "viverra.Donec.tempus@erosNam.co.uk"},
        {"name": "Maxwell", "email": "dapibus.quam@nibhenimgravida.co.uk"},
        {"name": "Warren", "email": "nulla.Cras.eu@arcuVestibulum.net"},
        {"name": "Ivan", "email": "laoreet@augue.net"},
        {"name": "Victor", "email": "Duis.risus@montes.org"},
        {"name": "Paki", "email": "eros@aliquamenim.org"},
        {"name": "George", "email": "dolor@etnunc.org"},
        {"name": "Geoffrey", "email": "Nam.porttitor.scelerisque@purusactellus.co.uk"},
        {"name": "Jonah", "email": "ac.ipsum.Phasellus@etultricesposuere.com"},
        {"name": "Phillip", "email": "vestibulum@felisorciadipiscing.com"},
        {"name": "Benedict", "email": "Morbi@massanon.net"},
        {"name": "Ross", "email": "et@vitaesodalesnisi.net"},
        {"name": "Driscoll", "email": "lectus.Cum.sociis@euismodestarcu.com"},
        {"name": "Luke", "email": "sodales@velturpisAliquam.org"},
        {"name": "Barrett", "email": "tempor.arcu.Vestibulum@orciUtsemper.edu"},
        {"name": "Vincent", "email": "eu.ligula.Aenean@mauris.net"},
        {"name": "William", "email": "feugiat@acturpisegestas.com"},
        {"name": "Malcolm", "email": "quis@famesac.co.uk"},
        {"name": "Jason", "email": "Nunc.ut@consectetuerrhoncusNullam.com"},
        {"name": "August", "email": "sapien.imperdiet@elitdictum.co.uk"},
        {"name": "Macon", "email": "et@etlaciniavitae.edu"},
        {"name": "Merritt", "email": "at@Praesenteu.co.uk"},
        {"name": "Reese", "email": "mollis.Phasellus.libero@vitaepurusgravida.co.uk"},
        {"name": "Roth", "email": "semper.egestas.urna@velitPellentesqueultricies.net"},
        {"name": "Connor", "email": "aliquet.vel@Pellentesquehabitant.org"},
        {"name": "Ishmael", "email": "lobortis.mauris.Suspendisse@hendrerit.net"},
        {"name": "Demetrius", "email": "tempor@a.com"},
        {"name": "Clayton", "email": "magna.Sed@malesuada.com"},
        {"name": "Camden", "email": "dolor.nonummy@Aeneangravida.com"},
        {"name": "Edward", "email": "quam.dignissim@senectuset.net"},
        {"name": "Scott", "email": "urna.nec@a.edu"},
        {"name": "Caesar", "email": "rhoncus@laoreet.edu"},
        {"name": "Kenyon", "email": "Nunc.quis@semsempererat.com"},
        {"name": "Yardley", "email": "blandit@montesnasceturridiculus.co.uk"},
        {"name": "Cody", "email": "iaculis.nec.eleifend@convallisantelectus.ca"},
        {"name": "Neville", "email": "gravida@pede.co.uk"},
        {"name": "Devin", "email": "risus.Donec.egestas@enimnon.ca"},
        {"name": "Otto", "email": "at.sem.molestie@urnaVivamus.edu"},
        {"name": "Oleg", "email": "nec.cursus@tempusrisus.net"},
        {"name": "Gannon", "email": "Nulla.semper@seddictumeleifend.com"},
        {"name": "John", "email": "sagittis@MorbimetusVivamus.com"},
        {"name": "Merrill", "email": "mi.Duis@hymenaeosMaurisut.edu"},
        {"name": "Duncan", "email": "et@sagittislobortis.edu"},
        {"name": "Joseph", "email": "a@massanonante.net"},
        {"name": "Hyatt", "email": "et.ultrices.posuere@risus.ca"},
        {"name": "Holmes", "email": "ornare.elit@maurisrhoncusid.edu"},
        {"name": "Camden", "email": "Integer.eu.lacus@amet.edu"},
        {"name": "Chase", "email": "Aenean.eget.metus@placeratvelitQuisque.ca"},
        {"name": "Alexander", "email": "sit.amet.consectetuer@sitamet.org"},
        {"name": "Colin", "email": "nisl@egetipsum.com"},
        {"name": "Brady", "email": "erat.eget.ipsum@luctusaliquetodio.co.uk"}
    ]

    User.count().exec(function (err, count) {
            if (err) {
                sails.log.error('Already have data');
                return cb(err);
            }
            if (count > 0) return cb();

            User.create(dummyUsers).exec(cb);
        }
    )
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    cb();
};