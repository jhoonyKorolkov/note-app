const data = [
  {
    title: 'First Note',
    descr: 'Description for first note',
    date: new Date(Date.now()).toLocaleString(),
    isEditing: false,
    status: 'low',
    id: 1,
  },
  {
    title: 'Second Note',
    descr: 'Description for second note',
    date: new Date(Date.now()).toLocaleString(),
    isEditing: false,
    status: 'low',
    id: 2,
  },
  {
    title: 'Third Note',
    descr: 'Description for third note',
    date: new Date(Date.now()).toLocaleString(),
    isEditing: false,
    status: 'low',
    id: 3,
  },
];

const status = [
  {
    value: 'Low priority',
    name: 'low',
    id: 1,
  },
  {
    value: 'Normal priority',
    name: 'normal',
    id: 2,
  },
  {
    value: 'High priority',
    name: 'high',
    id: 3,
  },
];

export { data, status };
