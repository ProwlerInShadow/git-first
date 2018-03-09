/*
* @Author: Marte
* @Date:   2017-11-10 16:03:30
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-10 16:15:09
*/

'use strict';
 function ArrayUtil(){
            this.search = function(arr,target){
               return arr.indexOf(target);

            }
            this.max = function(arr){
                var temp = arr[0];
                for(var i = 1;i<arr.length;i++){
                    if(temp < arr[i])
                        temp = arr[i];
                }
                return temp;
            }
        }

