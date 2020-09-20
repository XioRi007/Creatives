
let servicesContainer = document.getElementsByClassName("advantages_inner_container")[0],
	serviceTitle = document.getElementsByClassName("advantage_title"),
	serviceInfo = document.getElementsByClassName("advantage_text");



servicesContainer.onclick = function(e){
	let tg = e.target;
	if(tg.classList.contains('advantage_title')){
		
		if(tg.classList.contains('active_feature')){
			clearClasses(serviceTitle, 'active_feature');
			clearClasses(serviceInfo, 'active_feature_text');
		}
		else{
			clearClasses(serviceTitle, 'active_feature');
			clearClasses(serviceInfo, 'active_feature_text');

			tg.classList.add('active_feature');
			tg.nextElementSibling.classList.add('active_feature_text');
		}	
		
	}
}
      

function clearClasses(services, activeClass){
	for(let service of services){
		if(service.classList.contains(activeClass)){
			service.classList.remove(activeClass);
		}
	}
}