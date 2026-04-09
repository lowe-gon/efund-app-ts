import Countries from 'world-countries';

export const countries = Countries.map(({ cca2, flag, idd, name }) => ({
  name: name.common,
  flag,
  code: idd.root + (idd.suffixes ? idd.suffixes[0] : ''),
  iso: cca2,
})).sort((a, b) => a.name.localeCompare(b.name));
