let defaultTheme;
const themes = new Map();

export function registerTheme(id, theme, markAsDefault) {
  themes.set(id, theme);

  if (markAsDefault) {
    defaultTheme = id;
  }
}

export function getTheme(id) {
  if (id) {
    return themes.get(id).value;
  } else if (defaultTheme) {
    return themes.get(defaultTheme).value;
  } else {
    return themes.values().next().value;
  }
}
