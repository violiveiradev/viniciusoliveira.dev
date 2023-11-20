function changeLanguage(lang) {
    var url = window.location.href.split('#')[0]; // Pega a URL atual
    var newUrl = url.replace(/\/(en|pt)\//, '/' + lang + '/'); // Substitui o idioma na URL
    window.location.href = newUrl; // Redireciona para a nova URL
}
