<!-- div login -->
<div class="w-full h-screen grid place-items-center">
	<!-- div contenedor  -->
	<div class="grid w-[300px]">
		<img
			class="w-[150px] block mb-12 justify-self-center sm:hidden"
			src="/logos/logo_yard_sale.svg"
			alt="logo yard"
		/>
		<h1 class="mb-3 text-center text-bold">Crea una nueva contraseña</h1>
		<p class="text-global-veryLigthPink text-regular font-light mt-0 mb-8 text-center">
			Ingrese su nueva contraseña
		</p>
		<!-- Formulario -->
		<form action="/" class="flex flex-col">
			<label class="text-compact mb-1 font-bold" for="password">Contraseña:</label>
			<input
				class="bg-global-textInputField border-none rounded-lg h-[30px] text-regular p-1.5 mb-3"
				type="password"
				name="password"
				id="password"
				placeholder="*********"
			/>
			<label class="text-compact mb-1 font-bold" for="new-password"
				>Ingresa de vuelta su contraseña:</label
			>
			<input
				class="bg-global-textInputField border-none rounded-lg h-[30px] text-regular p-1.5 mb-3"
				type="password"
				name="new-password"
				id="new-password"
				placeholder="*********"
			/>
			<input
				class="bg-global-hospitalGreen rounded-lg text-white cursor-pointer text-regular font-bold h-12 border-none mt-3 mb-7"
				type="submit"
				value="Confirmar"
			/>
		</form>
	</div>
</div>
