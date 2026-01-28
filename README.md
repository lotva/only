[![Prettier](https://github.com/lotva/only/actions/workflows/check-formatting.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-formatting.yaml) [![Stylelint](https://github.com/lotva/only/actions/workflows/check-styles.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-styles.yaml) [![ESLint](https://github.com/lotva/only/actions/workflows/check-scripts.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-scripts.yaml) [![TSC](https://github.com/lotva/only/actions/workflows/check-types.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-types.yaml)

## Тестовое задание для «Онли»

Сайт развёрнут на Верселе: https://only-ecru.vercel.app/

**Проект соответствует требованиям к реализации.** Используемые технологии — TypeScript, React, Sass, Swiper и GSAP. Единственное отличие: вместо Вебпака — Турбопак, его идейный наследник.

На странице расположены два блока, чтобы продемонстрировать независимость стейта.

**Дополнительно сделаны:** анимация появления на GSAP при попадании во вьюпорт, SSR на Next.js, плавный скролл Lenis, оптимизация `requestAnimationFrame` (все используемые rAF сводятся к одному источнику), линтинг кода при CI в экшенах, оптимизация шрифтов (57 КБ → 3 КБ, 227 КБ → 94 КБ). Сделан адаптив на флюидной типографике. Выполнена мемоизация с помощью React Compiler.

Код готов к продакшену. Приложение рендерится в константных 60 FPS, ререндеры минимизированы.

## Как работать с проектом

Пакетный менеджер — PNPM ≥10.10.0. Вот команды для разработки:

1. Установить зависимости: `pnpm install`.
2. Запустить дев-сервер: `pnpm run dev`.
3. Собрать приложение: `pnpm run build`.
4. Запустить сервер: `pnpm run start`.

## Файловая структура

**Архитектурная методология — [FEOD](https://habr.com/ru/companies/sportmaster_lab/articles/972410/).** Код разделён на директории `app`, `core`, `modules`, `views` и `shared`. Проект состоит из одного модуля `HistoryTimeline`, имеющего подмодули `ThemeWheel` и `Slider`.

Что находится в каждой директории:

- `app`: привычный рутинг Некста — корневой рут и лэйаут.
- `core`: глобальные стили и компоненты рантаймов GSAP, Tempus и Lenis.
- `modules`: состоит из одного модуля `HistoryTimeline`, имеющего подмодули `ThemeWheel` и `Slider`. FEOD — фрактальная методология, в ней модули могут иметь неограниченное число подмодулей, повторяя их структуру. Модули дробятся на слайсы, напоминающие FSD: `ui`, `lib`, `config`.
- `pages`: корневая страница.
- `shared`: базовые компоненты в `ui`, вспомогательный код в `lib`, анимации и визуальные преображения на GSAP — в `effects`.

См. «[Как FEOD помогает упорядочить архитектуру фронтенд-приложений](https://habr.com/ru/companies/sportmaster_lab/articles/972410/)»

Некоторые директории содержат ридми с описанием кода.

https://github.com/user-attachments/assets/28cf9dd6-9e10-4f6d-88ef-99178705118e

## Стек

| Категория | Технологии                                                   |
| --------- | ------------------------------------------------------------ |
| Фреймворк | Next.js 16, React 19.2, TypeScript                           |
| Стили     | SCSS, CSS Modules                                            |
| Анимации  | GSAP, Lenis, Tempus                                          |
| DX        | Prettier, Stylelint, ESLint, Commitlint, Lefthook, Turbopack |

## Контакты

Почта: [dlotva@yandex.ru](mailto:dlotva@yandex.ru), Телеграм: [t.me/lotva](https://t.me/lotva)
