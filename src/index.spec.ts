import {expect, spy, dom} from 'mochaccino';

import { SharedSingleton } from './index';
function beforeAll(callable){
   before(()=>{
     callable();
   }) 
}
describe('SharedSingleton module', ()=>{
    describe('responsive layout helpers', ()=>{
        beforeAll(()=>{
            SharedSingleton.setXs(false);
            SharedSingleton.setSm(false);
            SharedSingleton.setMd(false);
            SharedSingleton.setLg(false);
            SharedSingleton.setXl(false);
        })
        it('isXs should return the value set by setXs', ()=>{
            SharedSingleton.setXs(true);
            expect(SharedSingleton.isXs()).toBe(true);
        })
        it('isSm should return the value set by setSm', ()=>{
            SharedSingleton.setSm(true);
            expect(SharedSingleton.isSm()).toBe(true);
        })
        it('isMd should return the value set by setMd', ()=>{
            SharedSingleton.setMd(true);
            expect(SharedSingleton.isMd()).toBe(true);
        })
        it('isLg should return the value set by setLg', ()=>{
            SharedSingleton.setLg(true);
            expect(SharedSingleton.isLg()).toBe(true);
        })
        it('isXl should return the value set by setXl', ()=>{
            SharedSingleton.setXl(true);
            expect(SharedSingleton.isXl()).toBe(true);
        })
    })

    describe('List item view helpers', ()=>{
       it('isItemExpandedMode should return the value set by setItemExpandedMode', ()=>{
            SharedSingleton.setItemExpandedMode(true);
            expect(SharedSingleton.isItemExpandedMode()).toBe(true);
        })
       it('isDistractionFreeMode should return the value set by setDistractionFreeMode', ()=>{
            SharedSingleton.setDistractionFreeMode(true);
            expect(SharedSingleton.isDistractionFreeMode()).toBe(true);
        })
    })
    describe('Content manupulation helpers', ()=>{
       it('stripHtml should return non-html version of any html string passed into it', ()=>{
            expect(SharedSingleton.stripHtml('<a></a>')).toEqual('');
            expect(SharedSingleton.stripHtml('<a:b></a:b>')).toEqual('');
            expect(SharedSingleton.stripHtml('<a></abd>')).toEqual('');
            expect(SharedSingleton.stripHtml('<a>1234</abd>')).toEqual('1234');
            expect(SharedSingleton.stripHtml('<a>1234/<.?></a>')).toEqual('1234/');
            expect(SharedSingleton.stripHtml('<a/>1234/<.?></a>')).toEqual('1234/');
            expect(SharedSingleton.stripHtml('&lt;a/&gt;1234/<.?></a>')).toEqual('&lt;a/&gt;1234/');
        })

        it('toUpperFirstLetter should return Capitalized version of a word passed to it', ()=>{
            expect(SharedSingleton.toUpperFirstLetter('page')).toBe('Page');
            expect(SharedSingleton.toUpperFirstLetter('state   ')).toBe('State   ');
            expect(SharedSingleton.toUpperFirstLetter('Monkey')).toBe('Monkey');
            expect(SharedSingleton.toUpperFirstLetter('key')).toBe('Key');
        })
        it('pluralize should return pluralized version when a singular word is passed to it as the only parameter', ()=>{
            expect(SharedSingleton.pluralize('page   ')).toBe('pages');
            expect(SharedSingleton.pluralize('state ')).toBe('states');
            expect(SharedSingleton.pluralize('monkey')).toBe('monkeys');
            expect(SharedSingleton.pluralize('key         ')).toBe('keys');
            expect(SharedSingleton.pluralize('quiz')).toBe('quizzes');
            expect(SharedSingleton.pluralize('sheep')).toBe('sheep');
            expect(SharedSingleton.pluralize('money')).toBe('money');
        })
        it('pluralize should return singular version when a plural form of word is passed to it together with revert parameter as true', ()=>{
            expect(SharedSingleton.pluralize('pages   ', true)).toBe('page');
            expect(SharedSingleton.pluralize('states ', true)).toBe('state');
            expect(SharedSingleton.pluralize('monkeys', true)).toBe('monkey');
            expect(SharedSingleton.pluralize('keys         ', true)).toBe('key');
            expect(SharedSingleton.pluralize('quizzes', true)).toBe('quiz');
            expect(SharedSingleton.pluralize('sheep', true)).toBe('sheep');
            expect(SharedSingleton.pluralize('money', true)).toBe('money');
        })
        it('toPluralModelName should return pluralized and Capitalized version of any word passed to it', ()=>{
            expect(SharedSingleton.toPluralModelName('page   ')).toBe('Pages');
            expect(SharedSingleton.toPluralModelName('page   ')).toBe('Pages');
            expect(SharedSingleton.toPluralModelName('state ')).toBe('States');
            expect(SharedSingleton.toPluralModelName('monkey      ')).toBe('Monkeys');
            expect(SharedSingleton.toPluralModelName('key')).toBe('Keys');
        })
        it('toSingularModelName should return pluralized and Capitalized version of any word passed to it', ()=>{
            expect(SharedSingleton.toSingularModelName('pages   ')).toBe('Page');
            expect(SharedSingleton.toSingularModelName('pages   ')).toBe('Page');
            expect(SharedSingleton.toSingularModelName('states ')).toBe('State');
            expect(SharedSingleton.toSingularModelName('monkeys      ')).toBe('Monkey');
            expect(SharedSingleton.toSingularModelName('keys')).toBe('Key');
        })
      
    })
    
})