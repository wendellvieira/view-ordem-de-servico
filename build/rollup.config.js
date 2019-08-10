import vue from 'rollup-plugin-vue'; // Manipula arquivos .vue
import buble from 'rollup-plugin-buble'; // Transpila com considerável suporte a navegadores
export default {
  input: 'src/wrapper.js', // Caminho relativo ao package.json
  output: {
    name: 'ViewOrdemDeServico',
    exports: 'named',
  },
  plugins: [
    vue({
      css: true, // Dinamicamente injeta CSS como uma tag <style>
      compileTemplate: true, // Explicitamente converte template para função render()
    }),
    buble(), // Transpila para ES5
  ],
};