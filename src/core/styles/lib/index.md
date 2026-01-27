# Утилитарные CSS-классы

## `.visuallyHidden`

Визуально скрывает текст для скринридеров. Позволяет оставлять подсказки для слабовидящих пользователей там, где ARIA-атрибуты — неудобны.

```html
<section aria-labeledby="about-heading">
	<h2 id="about-heading" className="visuallyHidden">О нас</h2>
</section>
```

[Hide content](https://www.a11yproject.com/posts/how-to-hide-content/). The A11Y Project

[Inclusively Hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html). Scott O'Hara

[Способы сделать доступную кнопку с иконкой](https://www.sarasoueidan.com/blog/accessible-icon-buttons/#technique-%234%3A-aria-label-on-the-<svg>-icon). Sara Soueidan

## `.clickableArea`

В основном применяется в дизайне карточек. Растягивает строчную ссылку на весь блок и делает блок кликабельным без надобности менять вёрстку.

```html
<li class="card clickableArea">
	<img src="images/1.jpeg" alt="" />
	<div class="text">
		<h2>
			<a class="clickableAreaLink" href="#card-link"> Another card instance </a>
		</h2>
		<p>
			Cupidatat tempor sint mollit in tempor ut fugiat excepteur laborum labore.
		</p>
		<small>By Heydon Pickering</small>
	</div>
</li>
```

Приём описан в статье [Cards](https://inclusive-components.design/cards/). Inclusive Components
