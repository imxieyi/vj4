import attachObjectMeta from './util/objectMeta';

export const LANG_TEXTS = {
  c: 'C',
  c11: 'C11',
  cc: 'C++',
  cc17: 'C++17',
  java: 'Java',
  py: 'Python',
  py3: 'Python 3',
  go: 'Go',
  js: "Node.js"
};

export const LANG_HIGHLIGHT_ID = {
  c: 'c',
  c11: 'c',
  cc: 'cpp',
  cc17: 'cpp',
  java: 'java',
  py: 'python',
  py3: 'python',
  go: 'go',
  js: 'js'
};

export const LANG_CODEMIRROR_MODES = {
  c: 'text/x-csrc',
  c11: 'text/x-csrc',
  cc: 'text/x-c++src',
  cc17: 'text/x-c++src',
  java: 'text/x-java',
  py: 'text/x-python',
  py3: 'text/x-python',
  go: 'text/x-gosrc',
  js: 'text/javascript'
};
attachObjectMeta(LANG_CODEMIRROR_MODES, 'exportToPython', false);