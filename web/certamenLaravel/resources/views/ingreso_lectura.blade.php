@extends('layouts.master')

@section('body')
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    <span>Ingreso de Estado de Lectura</span>
                </div>
                <div class="card-body">
                    <div class="md-3">
                        <label for="fecha-txt" class="form-label">Fecha</label>
                        <input type="date" id="fecha-txt" class="form-control">
                    </div>
                    <div class="md-3">
                        <label for="hora-txt" class="form-label">Hora (hh:mm)</label>
                        <input type="hour" id="hora-txt" class="form-control">
                    </div>
                    <div class="md-3">
                        <label for="medidor-select" class="form-label">Medidor</label>
                        <select name="" id="medidor-select" class="form-select">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div class="md-3">
                        <label for="direccion-txt" class="form-label">Direccion</label>
                        <input type="text" id="direccion-txt" class="form-control">
                    </div>
                    <div class="md-3">
                        <label for="valor-txt" class="form-label">Valor</label>
                        <input type="number" id="valor-txt" class="form-control">
                    </div>
                    <div class="md-3">
                        <label for="tipo-medida-select" class="form-label">Tipo de Medida</label>
                        <select id="tipo-medida-select" class="form-select">
                            <option value="KiloWatts">KiloWatts</option>
                            <option value="Watts">Watts</option>
                            <option value="Temperatura">Temperatura</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer d-grid gap-1">
                    <button class="btn btn-info" id="registrar-btn">Registrar Lectura</button>
                </div>
            </div>
        </div>
    </div>
    
@endsection
@section('js')
    <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
    <script src="{{asset('js/ingreso_lectura.js')}}"></script>
@endsection