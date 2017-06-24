export module SharedSingleton {
    var _isXs: boolean = false;
    var _isSm: boolean = false;
    var _isMd: boolean = false;
    var _isLg: boolean = false;
    var _isXl: boolean = false;
    var _isDistractionFreeMode: boolean = false;
    var _isItemExpanded: boolean = false;
    var _isFixedLayout: boolean = true;

    export function isXs() {
        return _isXs;
    }
    export function setXs(isXs) {
        _isXs = isXs;
    }
    export function isSm() {
        return _isSm;
    }
    export function setSm(isSm) {
        _isSm = isSm;
    }
    export function isMd() {
        return _isMd;
    }
    export function setMd(isMd) {
        _isMd = isMd;
    }
    export function isLg() {
        return _isLg;
    }
    export function setLg(isLg) {
        _isLg = isLg;
    }
    export function isXl() {
        return _isXl;
    }

    export function setXl(isXl) {
        _isXl = isXl;
    }

     export function setItemExpandedMode(expanded) {
        _isItemExpanded=expanded;
    }
     export function isItemExpandedMode() {
       return  _isItemExpanded;
    }
     export function setDistractionFreeMode(active) {
        _isDistractionFreeMode=active;
    }
     export function isDistractionFreeMode() {
       return  _isDistractionFreeMode;
    }


    export function stripHtml(htmlInput: string) {
        htmlInput = htmlInput || "";
        var regex = /(&nbsp;|<([^>]+)>)/ig ///<\/?[^>]+(>|$)/g
        return htmlInput.replace(regex, "");
    }

    export function toUpperFirstLetter(word: string) {
        word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        return word;
    }
    
    export function toPluralModelName(singularModelName: string) {
        return toUpperFirstLetter(pluralize(singularModelName));
    }
    export function toSingularModelName(pluralModelName: string) {
       return toUpperFirstLetter(pluralize(pluralModelName, true));
    }

    export  function pluralize(inputWord, revert=false){
            inputWord=inputWord.trim();
            var plural = {
                '(quiz)$'               : "$1zes",
                '^(ox)$'                : "$1en",
                '([m|l])ouse$'          : "$1ice",
                '(matr|vert|ind)ix|ex$' : "$1ices",
                '(x|ch|ss|sh)$'         : "$1es",
                '([^aeiouy]|qu)y$'      : "$1ies",
                '(hive)$'               : "$1s",
                '(?:([^f])fe|([lr])f)$' : "$1$2ves",
                '(shea|lea|loa|thie)f$' : "$1ves",
                'sis$'                  : "ses",
                '([ti])um$'             : "$1a",
                '(tomat|potat|ech|her|vet)o$': "$1oes",
                '(bu)s$'                : "$1ses",
                '(alias)$'              : "$1es",
                '(octop)us$'            : "$1i",
                '(ax|test)is$'          : "$1es",
                '(us)$'                 : "$1es",
                '([^s]+)$'              : "$1s"
            };

            var singular = {
                '(quiz)zes$'             : "$1",
                '(matr)ices$'            : "$1ix",
                '(vert|ind)ices$'        : "$1ex",
                '^(ox)en$'               : "$1",
                '(alias)es$'             : "$1",
                '(octop|vir)i$'          : "$1us",
                '(cris|ax|test)es$'      : "$1is",
                '(shoe)s$'               : "$1",
                '(o)es$'                 : "$1",
                '(bus)es$'               : "$1",
                '([m|l])ice$'            : "$1ouse",
                '(x|ch|ss|sh)es$'        : "$1",
                '(m)ovies$'              : "$1ovie",
                '(s)eries$'              : "$1eries",
                '([^aeiouy]|qu)ies$'     : "$1y",
                '([lr])ves$'             : "$1f",
                '(tive)s$'               : "$1",
                '(hive)s$'               : "$1",
                '(li|wi|kni)ves$'        : "$1fe",
                '(shea|loa|lea|thie)ves$': "$1f",
                '(^analy)ses$'           : "$1sis",
                '((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$': "$1$2sis",        
                '([ti])a$'               : "$1um",
                '(n)ews$'                : "$1ews",
                '(h|bl)ouses$'           : "$1ouse",
                '(corpse)s$'             : "$1",
                '(us)es$'                : "$1",
                's$'                     : ""
            };

            var irregular = {
                'move'   : 'moves',
                'foot'   : 'feet',
                'goose'  : 'geese',
                'sex'    : 'sexes',
                'child'  : 'children',
                'man'    : 'men',
                'tooth'  : 'teeth',
                'person' : 'people'
            };

            var uncountable = [
                'sheep', 
                'fish',
                'deer',
                'moose',
                'series',
                'species',
                'money',
                'rice',
                'information',
                'equipment'
            ];

            // save some time in the case that singular and plural are the same
            if(uncountable.indexOf(inputWord.toLowerCase()) >= 0)
            return inputWord;

            // check for irregular forms
            for(var word in irregular){
                var replace: any, pattern:RegExp;
            if(revert){
                    pattern = new RegExp(irregular[word]+'$', 'i');
                    replace = word;
            } else{  pattern = new RegExp(word+'$', 'i');
                    replace = irregular[word];
            }
            if(pattern.test(inputWord))
                return inputWord.replace(pattern, replace);
            }
            var array, reg;
            if(revert)  array = singular;
                else   array = plural;

            // check for matches using regular expressions
            for(reg in array){

            var pattern = new RegExp(reg, 'i');

            if(pattern.test(inputWord))
                return inputWord.replace(pattern, array[reg]);
            }

        return inputWord;
    }
    
}
