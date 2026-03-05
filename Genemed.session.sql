-- Mock data for GENEMED database
-- Generated inserts for basic entities
-- Almacenes
INSERT INTO almacenes (
    id,
    nombre,
    codigo,
    tipo,
    activo,
    creado_por,
    actualizado_por
  )
VALUES (
    '11111111-1111-1111-1111-111111111111',
    'Farmacia Central',
    'FC001',
    'FARMACIA',
    true,
    'seed',
    'seed'
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    'Droguer
 Norte',
    'DN002',
    'DROGUERIA',
    true,
    'seed',
    'seed'
  );
-- Usuarios
INSERT INTO usuarios (
    id,
    email,
    nombre,
    apellido,
    password_hash,
    rol,
    activo,
    creado_por,
    actualizado_por
  )
VALUES (
    'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    'admin@genemed.test',
    'Admin',
    'Principal',
    'hash123',
    'SUPER_ADMIN',
    true,
    'seed',
    'seed'
  ),
  (
    'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    'operador@genemed.test',
    'Operador',
    'Uno',
    'hash456',
    'OPERADOR',
    true,
    'seed',
    'seed'
  );
-- Proveedores
INSERT INTO proveedores (
    id,
    razon_social,
    cuit,
    telefono,
    email,
    activo,
    creado_por,
    actualizado_por
  )
VALUES (
    '33333333-3333-3333-3333-333333333333',
    'Lab Farma S.A.',
    '30-12345678-9',
    '011-1234-5678',
    'contacto@labfarma.com',
    true,
    'seed',
    'seed'
  );
-- Familias de producto
INSERT INTO familias_productos (
    id,
    nombre_generico,
    proveedor_id,
    activo,
    creado_por,
    actualizado_por
  )
VALUES (
    '44444444-4444-4444-4444-444444444444',
    'Paracetamol',
    '33333333-3333-3333-3333-333333333333',
    true,
    'seed',
    'seed'
  );
-- Productos
INSERT INTO productos (
    id,
    nombre,
    proveedor_id,
    familia_id,
    tipo_venta,
    activo,
    creado_por,
    actualizado_por
  )
VALUES (
    '55555555-5555-5555-5555-555555555555',
    'Paracetamol 500mg',
    '33333333-3333-3333-3333-333333333333',
    '44444444-4444-4444-4444-444444444444',
    'VENTA_LIBRE',
    true,
    'seed',
    'seed'
  );
-- Precios
INSERT INTO precios_productos (
    id,
    producto_id,
    alicuota_iva_bps,
    precio_neto,
    precio_final,
    vigente_desde,
    creado_por,
    actualizado_por
  )
VALUES (
    '66666666-6666-6666-6666-666666666666',
    '55555555-5555-5555-5555-555555555555',
    1050,
    10000,
    11050,
    NOW(),
    'seed',
    'seed'
  );
-- Stock en almacenes
INSERT INTO stocks_almacen (
    id,
    almacen_id,
    producto_id,
    cantidad,
    stock_minimo,
    creado_por,
    actualizado_por
  )
VALUES (
    '77777777-7777-7777-7777-777777777777',
    '11111111-1111-1111-1111-111111111111',
    '55555555-5555-5555-5555-555555555555',
    200,
    10,
    'seed',
    'seed'
  );
-- Secuencia de documentos
INSERT INTO secuencias_documentos (id, almacen_id, tipo, ultimo_numero)
VALUES (
    '88888888-8888-8888-8888-888888888888',
    '11111111-1111-1111-1111-111111111111',
    'VENTA',
    0
  );
-- Ejemplo de venta y items
INSERT INTO ventas (
    id,
    numero_venta,
    almacen_id,
    estado,
    creado_por,
    actualizado_por
  )
VALUES (
    '99999999-9999-9999-9999-999999999999',
    'V0001',
    '11111111-1111-1111-1111-111111111111',
    'COMPLETADA',
    'seed',
    'seed'
  );
INSERT INTO items_ventas (
    id,
    venta_id,
    producto_id,
    cantidad,
    alicuota_iva_bps,
    precio_neto_unitario,
    precio_final_unitario,
    creado_por,
    actualizado_por
  )
VALUES (
    'aaaaaaaa-0000-aaaa-0000-aaaaaaaa0000',
    '99999999-9999-9999-9999-999999999999',
    '55555555-5555-5555-5555-555555555555',
    2,
    1050,
    10000,
    11050,
    'seed',
    'seed'
  );
-- Fin of mock data