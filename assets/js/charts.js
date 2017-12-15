
CanvasJS.addColorSet("theme1",
   [
      "#0070bb",
      "#39b549"
   ]);

var chartColumnOptions = {
   animationEnabled: true,
   animationDuration: 1000,
   title: {
      text: "Доходы",
      fontColor: "#0071BC",
      fontSize: 14,
      fontFamily: "fira_sanslight"
   },
   colorSet: "theme1",
   axisX: {
      gridThickness: 0,
      lineThickness: 0,
      tickThickness: 0,
      valueFormatString: " ",
      //                labelAngle: 90,
      labelFontWeight: 'normal'
      //                labelAutoFit: true
      
   },
   axisY: {
      gridThickness: 0,
      lineThickness: 0,
      tickThickness: 0,
      valueFormatString: " "
   },
   toolTip: {
      cornerRadius: 0,
      borderThickness: 0,
      borderColor: "#fff",
      fontSize: 12,
      fontFamily: "fira_sanslight",
      fontStyle: "normal",
      backgroundColor: "#ffffff"
   },
   data: [
      {
         type: "column",
         
         dataPoints: [
            {label: "Приморский ФО", y: 10},
            {label: "Урльский ФО", y: 15},
            {label: "Республика Хакасия", y: 25},
            {label: "Кабардино-Балкарская республика", y: 30},
            {label: "Бурятия", y: 28}
         ]
      }
   ]
};

var chartColumnOptions2 = $.extend({}, chartColumnOptions, {
   title: {
      text: "Обеспечение жильем",
      fontColor: "#0071BC",
      fontSize: 14,
      fontFamily: "fira_sanslight"
   },
   data: [
      {
         type: "column",
         
         dataPoints: [
            {label: "Приморский ФО", y: 50},
            {label: "Урльский ФО", y: 5},
            {label: "Республика Хакасия", y: 10},
            {label: "Кабардино-Балкарская республика", y: 60},
            {label: "Бурятия", y: 10}
         ]
      }
   ]
});
var chartColumnOptions3 = $.extend({}, chartColumnOptions, {
   title: {
      text: "Стажировки и повышение квалификации",
      fontColor: "#0071BC",
      fontSize: 14,
      fontFamily: "fira_sanslight"
   },
   data: [
      {
         type: "column",
         
         dataPoints: [
            {label: "Приморский ФО", y: 25},
            {label: "Урльский ФО", y: 20},
            {label: "Республика Хакасия", y: 50},
            {label: "Кабардино-Балкарская республика", y: 10},
            {label: "Бурятия", y: 30}
         ]
      }
   ]
});

var chartColumnOptions4 = $.extend({}, chartColumnOptions, {
   title: {
      text: "",
      fontColor: "#0071BC",
      fontSize: 14,
      fontFamily: "fira_sanslight"
   },
   data: [
      {
         type: "line",
         axisYType: "secondary",
         dataPoints: [
            {y: 25},
            {y: 20},
            {y: 50},
            {y: 10},
            {y: 50}
         ]
      },
      {
         type: "line",
         
         dataPoints: [
            {y: 10},
            {y: 60},
            {y: 70},
            {y: 60},
            {y: 80}
         ]
      }
   ],
   axisX: {
      gridThickness: 1,
      lineThickness: 1,
      tickThickness: 0,
//                valueFormatString: " ",
      labelFontWeight: 'normal'
      
      
   },
   axisY: {
      gridThickness: 1,
      lineThickness: 1,
      tickThickness: 0,
      interval: 25,
      minimum: 0,
      maximum: 100
   },
   axisY2: {
      gridThickness: 1,
      lineThickness: 1,
      tickThickness: 0,
      interval: 25,
      minimum: 0,
      maximum: 100
   }
   
   
   
});
var chartColumnOptions5 = $.extend({}, chartColumnOptions, chartColumnOptions4, {
   data: [
      {
         type: "line",
         axisYType: "secondary",
         dataPoints: [
            {y: 25},
            {y: 20},
            {y: 50},
            {y: 10},
            {y: 60}
         ]
      },
      {
         type: "line",
         
         dataPoints: [
            {y: 10},
            {y: 60},
            {y: 70},
            {y: 40},
            {y: 10}
         ]
      }
   ],
   axisY: {
      gridThickness: 1,
      lineThickness: 1,
      tickThickness: 0,
      interval: 25,
      minimum: 0,
      maximum: 100
   },
   axisY2: {
      gridThickness: 1,
      lineThickness: 1,
      tickThickness: 0,
      interval: 25,
      minimum: 0,
      maximum: 100
   }
});
var chartColumnOptions6 = $.extend({}, chartColumnOptions, chartColumnOptions4, {
   data: [
      {
         type: "line",
         axisYType: "secondary",
         dataPoints: [
            {y: 25},
            {y: 20},
            {y: 50},
            {y: 10},
            {y: 30}
         ]
      },
      {
         type: "line",
         
         dataPoints: [
            {y: 20},
            {y: 60},
            {y: 70},
            {y: 40},
            {y: 40}
         ]
      }
   ],
   axisY: {
      gridThickness: 1,
      lineThickness: 1,
      tickThickness: 0,
      interval: 25,
      minimum: 0,
      maximum: 100
   },
   axisY2: {
      gridThickness: 1,
      lineThickness: 1,
      tickThickness: 0,
      interval: 25,
      minimum: 0,
      maximum: 100
   }
});

var chartColumn = new CanvasJS.Chart("chartContainer", chartColumnOptions);
var chartColumn2 = new CanvasJS.Chart("chartContainer2", chartColumnOptions2);
var chartColumn3 = new CanvasJS.Chart("chartContainer3", chartColumnOptions3);
var chartColumn4 = new CanvasJS.Chart("chartContainer4", chartColumnOptions4);
var chartColumn5 = new CanvasJS.Chart("chartContainer5", chartColumnOptions5);
var chartColumn6 = new CanvasJS.Chart("chartContainer6", chartColumnOptions6);

setTimeout(function () {
   chartColumn.render();
   chartColumn2.render();
   chartColumn3.render();
   chartColumn4.render();
   chartColumn5.render();
   chartColumn6.render();
}, 500);

