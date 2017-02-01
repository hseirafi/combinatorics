/**
 * Created by hass on 8/7/2016.
 */

//Advanced Currying and Combinatorics inside angular factory
angular.module('combinatorics').factory('disseminate', ['$rootScope', function ($rootScope) {
    //combinatorics
    const tie = f => x => f(x);
    const tiep = f => g => x => f(g(x));
    // combinatorial abstractions over arity
    const uniKnot = tiep(tiep)(tiep);
    const ap = tie(tie);
    //applicative pattern
    const bowLine = tiep(tiep)(uniKnot);
    const uncurr = f => (x, y) => f(x)(y);
    const inIndex= f=> xs => xs.indexOf(f);
    const find = f => xs => xs.find((collection, view, obj) => f( name, view, obj));
    const andeqto = y => x => x.collection === y.collection && x.view === y.view;
    const hasObject = tiep(find)(andeqto);
    const every = f => xs => xs.every((a) => f(a));
    const filter = f => xs => xs.filter((v, k) => f(v, k));
    const includes = f => xs => xs.includes(f);
    const fold = f => acc => xs => xs.reduce(uncurr(f), acc);
    const id = x => x;
    const inductiveDimen = x => x === -1;
    const isNotWithin = uniKnot(inductiveDimen)(inIndex);
    const foldKnot = fold(tie)(id);
    const get = k => o => o[k];
    const eq = y => x => x === y;
    const inlist = tiep(find)(eq);
    const checkView = (element) => eq(element.view)(view);
    const checkViewIn = tiep(every)(checkView);
    const angulate = (state) =>
    ({
        injector: () => angular.element(document.documentElement).injector().get(state.name)
});
    const broadCast = (check) => () => eq(check.collection)() && eq(check.view)(view);
    const view = tie(angulate)({name: '$location'}).injector().path();
    return {
            angulate: (name) => {
            let state = {
                name
            };
    return Object.assign(
        {},
        angulate(state)
    );
},
    collection: [],
        radiate () {
        const self = this;
        const collection = self.collection;
        log('name',name);
        return new Promise(function (resolve, reject) {
                if (includes(hasObject(broadCast)(collection))(collection) && checkViewIn(collection)) {
                    resolve(hasObject(broadCast)(collection));
                }
                else if (isNotWithin(hasObject(broadCast)(collection))(collection)) {
                    reject(hasObject(broadCast)(collection));
                }
            }).catch((error) => {
                throw new Error('value not in broadcast', error);
    }).then(d => d);
    },
    promulgate (collection) {
        this.collection.push({collection: collection, view: view});
    },
    broadcast: {
        _message: '',
            broadcastItem () {
            $rootScope.$broadcast('handleBroadcast');
        },
        prepForBroadCast (message) {
            this._message = message || 'no_message_in_this_broadcast';
            this.broadcastItem();
        },
        unbind(){
            return angular.noop();
        },
        forceUnbind:{
            emitDestroy(){
                $rootScope.$emit('destroy');
            },
            onDestroy(){
                $rootScope.$on('destroy', function () {
                    return  angular.noop();
                });
            }
        },
    },
    onLine(){
        function getGear(gear, model, value) {
            return {
                gear,
                model,
                value,
                [gear+ 'Shift']: setInterval(model,  value),
                cancel() {
                    let compute= this.gear+'Shift';
                    clearInterval(this[gear+'Shift']);
                }
            };
        };
        let secondGear= getGear('second', getNetwork,5000)
        let firstGear= getGear('first', getNetwork,1000)
        function getNetwork(){
            let connection  = () => fetch``.then(a => true ).catch(a => false);
            return connection().then(function(data){
                if(!data){
                    secondGear.cancel();
                    firstGear.firstShift();
                }else{
                    firstGear.cancel();
                    secondGear.secondShift
                }
            })
        };
        secondGear.secondShift
    }
    bury (a) {
        this.collection.splice(a, 1);
    },
    rungen (url) {
        return this.run(function *() {
                const response = yield url;
                const post = yield response.json();
                return post;
            }).catch(error => log(error));
    },
    run (generator) {
        const iterator = generator();
        function iterate(iteration) {
            if (iteration.done) {
                return iteration.value;
            }
            const promise = iteration.value;
            return promise.then(x => iterate(iterator.next(x)));
        }
        return iterate(iterator.next());
    }
};
}]);