import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
		alias: {
			'@': '/src'
		}
	},
	css: {
		//css预处理
		preprocessorOptions: {
			scss: {
				/*
				引入scss全局预定义变量，全局可以使用
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
				additionalData: '@import "@/assets/scss/global.scss";'
			}
		}
	}
});
