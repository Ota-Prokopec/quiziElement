



    class Newelement {

      id(name) {

        return document.getElementById(name)

      }

      class(name) {

        return document.getElementsByClassName(name)

      }

      tagName(name) {

        return document.getElementsByTagName(name)

      }

      name() {

        return document.getElementsByName(name)

      }

    }



      class CreateElementByQuizi {

           element(tagName, object,   ...el) {
           const element = document.createElement(tagName);
           //console.log(el);
           if (typeof(object) === "object") {

             for (const [key, value] of Object.entries(object)) {
                       element.setAttribute(key, value);

             }

           }

           for (let pos = 0; pos < el.length; pos++) {
             if (typeof el[pos] == "string") {
                      element.innerHTML = el[pos];
             }
             else {
               element.appendChild(el[pos]);
             }
           }
                     return element ;
         }

      }















class SetAtrributeForElementQuizi {

     class(element, value) {

       element.classList.add(value);

     }

}

class RemoveAtributesForElementQuizi {

     class(element, value) {

       element.classList.remove(value);

     }

}















           class Styleelementquizi {
              element(data, ...element) {

               Array.from(element).forEach(el => {

                 el.style[data.key] = data.value

               })

             }
           }












    function events(element, value, callback) {

          if (!Array.isArray(element)) {
            element = [element]
          }

      element.forEach(e => {

        e.addEventListener(value, callback)

      })

    }










    const quiziElement = {
      get: new Newelement(),
      style: new Styleelementquizi(),
      create: new CreateElementByQuizi(),
      set: new SetAtrributeForElementQuizi(),
      remove: new RemoveAtributesForElementQuizi()
    }
