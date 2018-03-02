import attachObjectMeta from './util/objectMeta';

export const LANG_TEXTS = {
  c: 'C',
  cc: 'C++',
  java: 'Java',
  py: 'Python',
  py3: 'Python 3',
};

export const LANG_HIGHLIGHT_ID = {
  c: 'c',
  cc: 'cpp',
  java: 'java',
  py: 'python',
  py3: 'python',
};

export const LANG_CODEMIRROR_MODES = {
  c: 'text/x-csrc',
  cc: 'text/x-c++src',
  java: 'text/x-java',
  py: 'text/x-python',
  py3: 'text/x-python',
};
attachObjectMeta(LANG_CODEMIRROR_MODES, 'exportToPython', false);
