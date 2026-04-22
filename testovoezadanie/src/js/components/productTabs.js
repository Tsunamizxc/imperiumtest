document.addEventListener('DOMContentLoaded', function() {
  // Находим все товары
  const productItems = document.querySelectorAll('.product__swiper_item');
  
  productItems.forEach(product => {
    // Ищем элементы внутри конкретного товара
    const tabItems = product.querySelectorAll('.product__img_tabs-item');
    const bigImages = product.querySelectorAll('[data-img-big]');
    const showBtns = product.querySelectorAll('.showbtns');
    
    // Функция для скрытия всех больших изображений в этом товаре
    function hideAllBigImages() {
      bigImages.forEach(img => {
        img.style.display = 'none';
      });
    }
    
    // Функция для удаления активного класса у всех вкладок в этом товаре
    function removeActiveClass() {
      tabItems.forEach(tab => {
        tab.classList.remove('active');
      });
    }
    
    // Функция для показа изображения и активации вкладки
    function activateTab(tabValue, clickedTab) {
      hideAllBigImages();
      
      bigImages.forEach(img => {
        if (img.getAttribute('data-img-big') === tabValue) {
          img.style.display = 'block';
        }
      });
      
      removeActiveClass();
      clickedTab.classList.add('active');
    }
    
    // Функция для скрытия элементов с data-img-tab >= 7
    function hideExtraTabs() {
      tabItems.forEach(item => {
        const tabNumber = item.getAttribute('data-img-tab');
        if (tabNumber && parseInt(tabNumber) >= 7) {
          item.style.display = 'none';
        }
      });
    }
    
    // Функция для переключения видимости (показать/скрыть)
    function toggleTabs() {
      const hiddenTabs = Array.from(tabItems).filter(item => {
        const tabNumber = item.getAttribute('data-img-tab');
        return tabNumber && parseInt(tabNumber) >= 7 && item.style.display === 'none';
      });
      
      if (hiddenTabs.length > 0) {
        // Если есть скрытые элементы - показываем их
        tabItems.forEach(item => {
          const tabNumber = item.getAttribute('data-img-tab');
          if (tabNumber && parseInt(tabNumber) >= 7) {
            item.style.display = '';
          }
        });
      } else {
        // Если все элементы видимы - скрываем элементы с 7 и выше
        tabItems.forEach(item => {
          const tabNumber = item.getAttribute('data-img-tab');
          if (tabNumber && parseInt(tabNumber) >= 7) {
            item.style.display = 'none';
          }
        });
      }
    }
    
    // Добавляем обработчик клика на каждую вкладку в этом товаре
    tabItems.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.stopPropagation();
        const tabValue = this.getAttribute('data-img-tab');
        if (tabValue) {
          activateTab(tabValue, this);
        }
      });
    });
    
    // Обработчик для каждой кнопки показа скрытых вкладок в этом товаре
    if (showBtns.length > 0) {
      showBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
this.classList.toggle("active");
          e.stopPropagation();
          toggleTabs();
        });
      });
    }
    
    // Скрываем лишние вкладки при загрузке
    hideExtraTabs();
    
    // Активируем первую вкладку и первое изображение при загрузке
    const firstTabWithValue = Array.from(tabItems).find(tab => tab.getAttribute('data-img-tab') === '1');
    
    if (firstTabWithValue) {
      const firstTabValue = firstTabWithValue.getAttribute('data-img-tab');
      
      hideAllBigImages();
      bigImages.forEach(img => {
        if (img.getAttribute('data-img-big') === firstTabValue) {
          img.style.display = 'block';
        }
      });
      
      firstTabWithValue.classList.add('active');
    }
  });
});