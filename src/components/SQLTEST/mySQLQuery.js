import { useState } from 'react';
import { Field, RuleGroupType } from 'react-querybuilder';
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];

export default () => {
  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [
      { field: 'firstName', operator: '=', value: 'Steve' },
      { field: 'lastName', operator: '=', value: 'Vai' },
    ],
  });

  return <QueryBuilder fields={fields} query={query} onQueryChange={q => setQuery(q)} />;
};