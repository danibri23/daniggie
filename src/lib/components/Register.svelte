<!-- div login -->
<div class="w-full h-screen grid place-items-center">
	<!-- div contenedor  -->
	<div class="grid w-[300px]">
		<h1 class="mb-8 text-start lg:text-center text-bold">Mi cuenta</h1>

		<!-- Formulario -->
		<form action="/" class="flex flex-col h-full">
			<label class="text-compact mb-1 font-bold" for="name">Nombre:</label>
			<input
				class="bg-global-textInputField border-none rounded-lg h-12 text-regular p-5 mb-3"
				type="text"
				name="name"
				id="name"
				placeholder="Daniel"
			/>

			<label class="text-compact mb-1 font-bold" for="last-name">Apellido:</label>
			<input
				class="bg-global-textInputField border-none rounded-lg h-12 text-regular p-5 mb-3"
				type="text"
				name="last-name"
				id="last-name"
				placeholder="Brizuela"
			/>

			<label class="text-compact mb-1 font-bold" for="email">Correo:</label>
			<input
				class="bg-global-textInputField border-none rounded-lg h-12 text-regular p-5 mb-3"
				type="text"
				name="email"
				id="email"
				placeholder="danielbrizuela@gmail.com"
			/>
			<label class="text-compact mb-1 font-bold" for="password">Contraseña:</label>
			<input
				class="bg-global-textInputField mb-8 border-none rounded-lg h-12 text-regular p-5"
				type="password"
				name="password"
				id="password"
				placeholder="*********"
			/>
			<input
				class="bg-global-hospitalGreen rounded-lg text-white cursor-pointer text-regular font-bold h-12 mb-4 w-[300px] bottom-0 lg:static lg:mb-7 lg:mt-4"
				type="submit"
				value="Crear Cuenta"
			/>
		</form>
	</div>
</div>
