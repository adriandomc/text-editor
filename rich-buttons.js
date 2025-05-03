 //------------------------------- B U T T O N S ---------------------------------- 
    
 const debugLog = document.getElementsByClassName('debug-log')[0];
 let headerToggle = 0;

 function formatParagraph(type) {
   const selection = window.getSelection();

   if (!selection.rangeCount) {
     debugLog.innerHTML = 'Sin selección encontrada';
     return;
   }

   const range = selection.getRangeAt(0);
   const editor = document.getElementById('editor');
   const commonAncestor = range.commonAncestorContainer;

   if (!editor.contains(commonAncestor)) {
     debugLog.innerHTML = 'La selección está fuera del editor';
     return;
   }

   let element = range.startContainer;

   if (element.nodeType === Node.TEXT_NODE) {
     element = element.parentElement;
   }

   if (element && element.tagName) {
     element.style.textAlign = type;
     debugLog.innerHTML = 'Alineación aplicada a: ' + element.tagName + '<br>' + 'Alineación: ' + type;
   } else {
     debugLog.innerHTML = 'No hay un elemento válido para aplicar la selección';
   }
 }

 function formatHeading(type) {
   const selection = window.getSelection();

   if (!selection.rangeCount) {
     debugLog.innerHTML = 'Sin selección encontrada';
     return;
   }

   const range = selection.getRangeAt(0);
   const editor = document.getElementById('editor');
   const commonAncestor = range.commonAncestorContainer;

   if (!editor.contains(commonAncestor)) {
     debugLog.innerHTML = 'La selección está fuera del editor';
     return;
   }

   let element = range.startContainer;

   if (element.nodeType === Node.TEXT_NODE) {
     element = element.parentElement;
   }

   if (element && element.tagName && editor.contains(element) && element.parentElement === editor) {
     const heading = document.createElement(type);
     heading.innerText = element.textContent;
     element.replaceWith(heading);

     debugLog.innerHTML = 'Encabezado ' + type.toUpperCase() + ' creado: ' + heading.outerHTML;
   } else {
     debugLog.innerHTML = 'No hay un elemento válido para aplicar la selección';
   }
 }

 function applyStyle(style) {
   const selection = window.getSelection();

   if (!selection.rangeCount) {
     debugLog.innerHTML = 'Sin texto seleccionado';
     return;
   }

   const range = selection.getRangeAt(0);
   const editor = document.getElementById('editor');

   if (!editor.contains(range.commonAncestorContainer)) {
     debugLog.innerHTML = 'La selección está fuera del editor';
     return;
   }

   const selectedText = range.extractContents();
   let wrapper;

   switch (style) {
     case 'bold':
       wrapper = document.createElement('b');
       break;
     case 'italic':
       wrapper = document.createElement('i');
       break;
     case 'underline':
       wrapper = document.createElement('u');
       break;
     default:
       debugLog.innerHTML = 'Invalid style.';
       return;
   }

   wrapper.appendChild(selectedText);
   range.insertNode(wrapper);

   selection.removeAllRanges();
   const newRange = document.createRange();
   newRange.selectNodeContents(wrapper);
   selection.addRange(newRange);

   debugLog.innerHTML = 'Estilo aplicado: ' + style;
 }