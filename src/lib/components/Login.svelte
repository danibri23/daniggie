<!-- div login -->
<div class="w-full h-screen grid place-items-center">
	<!-- div contenedor  -->
	<div class="grid w-[300px]">
		<img
			class="w-[150px] block mb-12 justify-self-center sm:hidden"
			src="/logos/logo_yard_sale.svg"
			alt="logo yard"
		/>
		<!-- Formulario -->
		<form action="/" class="flex flex-col">
			<label class="text-compact mb-1 font-bold" for="password">Correo:</label>
			<input
				class="bg-global-textInputField border-none rounded-lg h-12 text-regular p-1.5 mb-3"
				type="password"
				name="password"
				id="password"
				placeholder="pedro@gmail.com"
			/>
			<label class="text-compact mb-1 font-bold" for="password">Contraseña:</label>
			<input
				class="bg-global-textInputField border-none rounded-lg h-12 text-regular p-1.5 mb-3"
				type="password"
				name="password"
				id="password"
				placeholder="*********"
			/>
			<input
				class="bg-global-hospitalGreen rounded-lg text-white cursor-pointer text-regular font-bold h-12 border-none mt-3 mb-5"
				type="submit"
				value="Iniciar Sesion"
			/>
		</form>

		<a
			class="text-global-hospitalGreen text-compact text-center text-decoration-none"
			href="/password">¿Olvidaste tu contraseña?</a
		>
		<a href="/register">
			<button
				class="bg-white rounded-lg text-global-hospitalGreen cursor-pointer text-regular font-bold h-12 mb-4 border border-global-hospitalGreen absolute w-[300px] bottom-0 lg:static lg:mb-7 lg:mt-4"
				>Crear Cuenta</button
			></a
		>
	</div>
</div>
