[![Prettier](https://github.com/lotva/only/actions/workflows/check-formatting.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-formatting.yaml) [![Stylelint](https://github.com/lotva/only/actions/workflows/check-styles.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-styles.yaml) [![ESLint](https://github.com/lotva/only/actions/workflows/check-scripts.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-scripts.yaml) [![TSC](https://github.com/lotva/only/actions/workflows/check-types.yaml/badge.svg)](https://github.com/lotva/only/actions/workflows/check-types.yaml)

## Демо производительного приложения с анимацией на GSAP, ScrollTrigger и Lenis

Сайт развёрнут на Верселе: https://only-ecru.vercel.app/

Что сделано: SSG на Next.js, анимация появления при попадании во вьюпорт, плавный скролл Lenis, оптимизация `requestAnimationFrame` (все используемые rAF синхронизованы), линтинг кода при CI в экшенах, адаптив на флюидной типографике.

Код готов к продакшену. Приложение рендерится в константных 60 кадрах, ререндеры минимизированы с помощью React Compiler.

## Как работать с проектом

Пакетный менеджер — PNPM ≥10.10.0. Вот команды для разработки:

1. Установить зависимости: `pnpm install`.
2. Запустить дев-сервер: `pnpm run dev`.
3. Собрать приложение: `pnpm run build`.
4. Запустить сервер: `pnpm run start`.

https://github.com/user-attachments/assets/28cf9dd6-9e10-4f6d-88ef-99178705118e

## Файловая структура

**Архитектурная методология — FEOD.** Код разделён на директории `app`, `core`, `modules`, `views` и `shared`. Проект состоит из одного модуля `HistoryTimeline`, имеющего подмодули `Wheel` и `Slider`.

Что находится в каждой директории:

- `app`: привычный рутинг Некста — корневой рут и лэйаут.
- `core`: глобальные стили и компоненты рантаймов GSAP, Tempus и Lenis.
- `modules`: состоит из одного модуля `HistoryTimeline`, имеющего подмодули `Wheel` и `Slider`. FEOD — фрактальная методология, в ней модули могут иметь неограниченное число подмодулей, повторяя их структуру. Модули дробятся на слайсы, напоминающие FSD: `ui`, `lib`, `config`.
- `views`: корневая страница.
- `shared`: базовые компоненты в `ui`, вспомогательный код в `lib`, анимации и визуальные преображения на GSAP — в `effects`.

См. «[Как FEOD помогает упорядочить архитектуру фронтенд-приложений](https://habr.com/ru/companies/sportmaster_lab/articles/972410/)»

## Стек

| Категория | Технологии                                                   |
| --------- | ------------------------------------------------------------ |
| Фреймворк | Next.js 16, React 19.2, TypeScript                           |
| Стили     | SCSS, CSS Modules                                            |
| Анимации  | GSAP, Lenis, Tempus                                          |
| DX        | Prettier, Stylelint, ESLint, Commitlint, Lefthook, Turbopack |
