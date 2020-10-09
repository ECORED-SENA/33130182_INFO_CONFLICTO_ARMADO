/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btnActIni}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play("actIni");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4848, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_continuar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play('mapa');
         
         // Reproducir una pista de audio 
         sym.$("audio-1400481")[0].play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6181, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7431, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8681, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9931, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnAct1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play("act1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnAct2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play("act2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnAct3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play("act3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnAct4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         sym.play("act4");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'personaje'
   (function(symbolName) {   
   
   })("personaje");
   //Edge symbol end:'personaje'

   //=========================================================
   
   //Edge symbol: 'text_act_iniciales'
   (function(symbolName) {   
   
   })("text_act_iniciales");
   //Edge symbol end:'text_act_iniciales'

   //=========================================================
   
   //Edge symbol: 'text_act1'
   (function(symbolName) {   
   
   })("text_act1");
   //Edge symbol end:'text_act1'

   //=========================================================
   
   //Edge symbol: 'text_act2'
   (function(symbolName) {   
   
   })("text_act2");
   //Edge symbol end:'text_act2'

   //=========================================================
   
   //Edge symbol: 'text_act3'
   (function(symbolName) {   
   
   })("text_act3");
   //Edge symbol end:'text_act3'

   //=========================================================
   
   //Edge symbol: 'text_act4'
   (function(symbolName) {   
   
   })("text_act4");
   //Edge symbol end:'text_act4'

   //=========================================================
   
   //Edge symbol: 'creditos'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${BtnCerrar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("creditos");
   //Edge symbol end:'creditos'

   //=========================================================
   
   //Edge symbol: 'cc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${BtnCerrar}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("cc");
   //Edge symbol end:'cc'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'opciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_desplegar_cintilla}", "click", function(sym, e) {
         
         
         
         sym.getComposition().getStage().$("menu_opciones").show("slide", { direction: "down" }, 1000);
         
         sym.getComposition().getStage().getSymbol("menu_opciones").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_home}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         // insert code for mouse click here
         sym.getComposition().getStage().play(0);
         
         
         
         
         

      });
      //Edge binding end

   })("opciones");
   //Edge symbol end:'opciones'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'menu_opciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_descargarpdf}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         window.open("ruta_de_navegacion.pdf", "_blank");
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.getComposition().getStage().$("creditos").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("creditos").play();
         
         
         
         /*sym.getComposition().getStage().getSymbol("personaje_1").stop();*/

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_cc}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.getComposition().getStage().$("cc").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("cc").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ocultar}", "click", function(sym, e) {
         
         
         sym.getComposition().getStage().$("menu_opciones").hide("slide", { direction: "down" }, 2000);
         
         
         

      });
      //Edge binding end

      

      

   })("menu_opciones");
   //Edge symbol end:'menu_opciones'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-504933622");