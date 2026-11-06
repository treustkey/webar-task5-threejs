# Задание 5 — Three.js WebAR

Запуск: npx --yes http-server . -p 8080. Открыть http://localhost:8080. На телефоне использовать HTTPS GitHub Pages.

Модули: App, ModelManager, UIController, ARController, Environment. Три модели, цвет, вращение, metalness/roughness, HDRI с резервной environment map. HTML UI использует обязательный DOM Overlay; касания UI не создают XR select. AR размещает объект перед пользователем при входе, затем оставляет его в пространстве.

Зависимости Three.js 0.170.0 загружаются с CDN, HDRI — с threejs.org. Нужен интернет. Настольный браузер: OrbitControls. Телефон: WebXR immersive-ar + DOM Overlay; доступность определяется программно. Физическое мобильное тестирование не выполнено.
